import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, DetailWrapper, Info, LeftContent } from './index'


const Recipe = () => {
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')
  let params = useParams()

  const fetchDetails = async () => {

    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json()
    setDetails(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name])

  return (
    <DetailWrapper>
      <LeftContent>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </LeftContent>
      <Info>

        <Button 
          className={activeTab === 'instructions'? 'active' : ''}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>

        <Button 
          className={activeTab === 'ingredients'? 'active' : ''}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {
          activeTab === "instructions" && (
            <div>
              <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
              <h2 dangerouslySetInnerHTML={{ __html: details.instructions }}></h2>
            </div>
        )}

        {
          activeTab === "ingredients" && (
            <ul>
              <li>balbalbalblab</li>
              <li>balblbalba</li>
            </ul>
          )
        }
      </Info>


    </DetailWrapper>
  )
}

export default Recipe