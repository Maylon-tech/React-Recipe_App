import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import {  Card, Wrapper, Gradient } from './index'

const Veggie = () => {
  const [veggie, setVeggie] = useState([])

    useEffect(() => {
        getVeggie()
    }, [])

    const getVeggie = async () => {

        const check = localStorage.getItem('veggie')

        if(check){
            setVeggie(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
            const data = await api.json()
            localStorage.setItem("veggie", JSON.stringify(data.recipes))        
            setVeggie(data.recipes)
            console.log(data.recipes)
        }
    }


  return (
    <div>
        <Wrapper>
            <h3>Our Vegetariam Picks</h3>
            <Splide
                options={{
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "2rem",
                }}
            >
                {
                    veggie.map((recipe) => {
                        return (
                            <SplideSlide>
                                <Card>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt="" />
                                    <Gradient />
                                </Card>
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </Wrapper>        
    </div>
  )
}

export default Veggie