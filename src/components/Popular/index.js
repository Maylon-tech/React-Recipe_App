import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 4rem 0;

  > h3 {
    padding: 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #333;
  }
`

export const Card = styled.div`
  min-height: 15rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient()rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5);
`

export const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem;
`
export const LeftArrow = styled.div`
  padding: 1rem;

  svg {
    font-size: 2rem;
    color: #444;
  }
`

export const RightArrow = styled.div`
  padding: 1rem;

  svg {
    font-size: 2rem;
    color: #444;
  }
`