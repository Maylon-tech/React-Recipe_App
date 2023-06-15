import React from 'react'
import Popular from '../../components/Popular/Popular'
import Veggie from '../../components/Veggie/Veggie'
import { Container } from '.'

const Home = () => {
  return (
    <Container>
        <Popular />
        <hr />
        <Veggie />
    </Container>
  )
}

export default Home