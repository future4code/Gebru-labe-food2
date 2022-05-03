import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`

export const InputContainer = styled.div`
    button {
        width: 360px;
        height: 42px;
        margin: 8px 0 0;
        padding: 0 16px;
        background-color: #e86e5a;
        font-family: Roboto Medium;
        font-size: 16px;
        letter-spacing: -0.39px;
        color: #000;
        border-radius: 2px;
        border: 0px;

        :hover {
            background-color: #e0634f;
        }
      
        :active {
            background-color: #cc6858;
        }
    }

    text-align: center;

    div {
        margin: 5px 0px 5px 0px;
    }

    input {
        width: 328px;
        height: 56px;
        margin: 0px;
        padding: 0px 16px 0px;
    }
`

export const TelaCadEndContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    width: 100vw;
    max-width: 450px;
`

export const ImgBack = styled.div`
    margin: 0 0 16px;
    padding: 0 0 10px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #fff;
    img {
        width: 23px;
        height: 24px;
        margin: 10px 321px 0 16px;
        object-fit: contain;
    }
`

export const Title = styled.div`
    margin: 16px 0 0;
    padding: 12px 32px;
    font-family: Roboto Medium;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
`