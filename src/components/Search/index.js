import styled from 'styled-components'

export const FormStyle = styled.form`
  margin: 2rem auto;
  max-width: 600px;
  
  
  > div {
    position: relative;
    width: 100%;

    > input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: #fff;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }

    > svg {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(100%, -50%);
        color: #fff;
    }
  }

`
