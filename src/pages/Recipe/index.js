import styled from 'styled-components'

export const DetailWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

`

export const LeftContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 45%;

  > h2 {
    color: #222;
    font-size: 1.1rem;
  }

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;  
  }
  
  > div {

    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;  
    }
  } 
`


export const Info = styled.div`
    margin-left: 10rem;
    display: flex;
    flex-direction: column;
    width: 75%;
`

export const ButtonContainer= styled.div`
  padding: 1.5rem;
`


export const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid #111;
    margin-right: 2rem;
    font-weight: 600;
`

export const InfoContent = styled.div`

  .instruction {
    padding: 1rem;
  }
  h3 {
    color: #222;
    font-size: 1rem;
    line-height: 1.5;
  }
  h2 {
    color: #444;
    font-size: .9rem;
    line-height: 1.5;
    margin-top: 1rem;
  }
`

export const ListIngredient = styled.div`
  padding: 1rem 1.5rem;

  > li {
    margin: .5rem 0;
  }
`