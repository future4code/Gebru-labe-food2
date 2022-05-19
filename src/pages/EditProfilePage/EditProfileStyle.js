import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
export const FormContainer = styled.div`
    display: grid;
    align-items: center;
    margin: 70px 10px;
`

export const PageTittleContainer = styled.form`
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 1;
`
export const TittleNavContainer = styled.form`
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    margin-top: 20px;
    margin-bottom: 15px;
    width: 360px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`
export const BackImg = styled.img`
    position: fixed;
    left: 16px;
    width: 15px;
    height: 15px;
    cursor: pointer
`
