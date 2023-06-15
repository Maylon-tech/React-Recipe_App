import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
 
`

export const Card = styled.div`
    margin: 1rem;
    img {
        width: 100%;
        border-radius: 1rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
    }
`
