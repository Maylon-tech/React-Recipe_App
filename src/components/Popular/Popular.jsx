import React, { useEffect, useState } from 'react'
import {  Card, Wrapper, Gradient } from './index'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"

const Popular = () => {
    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {

        const check = localStorage.getItem('popular')

        if(check){
            setPopular(JSON.parse(check))
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const data = await api.json()
            localStorage.setItem("popular", JSON.stringify(data.recipes))        
            
        }
    }

  return (
    <div>
        <Wrapper>
            <h3>Popular Picks</h3>
            <Splide
                options={{
                    perPage: 5,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "3rem",
                }}
            >
                {
                    popular.map((recipe) => {
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

export default Popular