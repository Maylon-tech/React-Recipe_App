import React, { useEffect, useState } from 'react'
import {  Card, Wrapper, Gradient, Arrows, LeftArrow, RightArrow } from './index'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom'

import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

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
                                <Card key={recipe.id}>
                                    <Link to={"/recipe/" + recipe.id}>
                                        <p>{recipe.title}</p>
                                        <img src={recipe.image} alt="" />
                                        <Gradient />
                                    </Link>
                                </Card>
                            </SplideSlide>
                        )
                    })
                }
            </Splide>

            <Arrows>
                <LeftArrow>
                    <BsFillArrowLeftCircleFill />
                </LeftArrow>
                <RightArrow>
                    <BsFillArrowRightCircleFill />
                </RightArrow>
            </Arrows>
        </Wrapper>        
    </div>
  )
}

export default Popular