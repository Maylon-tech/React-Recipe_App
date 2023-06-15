import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, Grid } from '.'

const Searched = () => {
    const [searchedRecipes, setSearchedRecipes] = useState([])
    const params = useParams()

    const getSearched = async (name) => {

        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json()
        setSearchedRecipes(recipes.results)
    }

    useEffect(() => {
        getSearched(params.search)
    }, [params.search])   // Referente ao ID em Route /:search..

  return (
    <Grid>
      {
        searchedRecipes.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={'/recipe/' + item.id}>            
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          )
        })
      }
    </Grid>
  )
}

export default Searched