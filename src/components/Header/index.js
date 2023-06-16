import styled from 'styled-components'

export const Container = styled.div`
  height: 80px;
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #eee;
  justify-content: space-between;
  border-radius: 10px;


  .active {
    color: #fff;
    background-color: #222;
  }
`

export const Logo = styled.div`
  padding: 1rem;

  > span {
    font-size: 1.3rem;
    font-weight: bold;
    color: #333;
  }

  > svg {
    font-size: 1.6rem;
    margin-left: .5rem;
  }
`


export const Login = styled.div`
  padding: 1rem;

  > button {
    padding: .6rem;
    width: 150px;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    background-color: #333;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
  }
`

export const Navbar = styled.div`
    padding: 1rem;
    display: flex;
    gap: 1.3rem;

    > a {
        color: #444;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: bold;
    }
`