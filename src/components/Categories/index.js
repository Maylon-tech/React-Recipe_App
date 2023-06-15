import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  max-width: 600px;
  margin: 0 auto;
`

export const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        color: white;
        font-size: .8rem;
    }

    svg {
        color: white;
        font-size: 1.5rem;
    }

    &:active {
        background: linear-gradient(to right, #f27121, #e94057)

        svg {
            color: white;
        }
        h4 {
            color: white;

        }
    }
`