import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import { Container, SLink } from '.'
import { NavLink } from 'react-router-dom'

const Category = () => {
  return (
    <Container>
        <SLink>
            <NavLink
                to={"/cuisine/Italian"}
            >
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
        </SLink>

        <SLink>
            <NavLink
                to={"/cuisine/American"}
            >
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
        </SLink>

        <SLink>
            <NavLink
                to={"/cuisine/Thai"}
            >
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
        </SLink>

        <SLink>
            <NavLink
                to={"/cuisine/Japanese"}
            >
                <GiChopsticks />
                <h4>Japanese</h4>
            </NavLink>
        </SLink>
    </Container>
  )
}

export default Category