import React from 'react'
import Popular from '../../components/Popular/Popular'
import Veggie from '../../components/Veggie/Veggie'
import { Container } from '.'


const Home = () => {
  return (
    <Container
      animate={{ opacity: 0}}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
        <Popular />
        <hr />
        <Veggie />
    </Container>
  )
}

export default Home