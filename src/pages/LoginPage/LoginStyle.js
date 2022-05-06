import styled from 'styled-components'


export const PageWrap = styled.div`
    width: 100%;
    height: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
`
export const LogoWrapper = styled.div`
    width: 104px;
    height: 58px;
    object-fit: contain;
    margin: 88px 128px 28px 128px;
`

export const InputWrapper = styled.input`
      width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0 0 15px 0;
`
export const ButtonWrapper = styled.button`
   margin-bottom: 15px;
    height: 40px;
    padding: 0 20px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 16px;
    background-color: slategray;
    min-width: 100px;

    &:hover{
      cursor: pointer;
      background-color: #b6d4e3;
    }
      
      `


export const ImgWrapper = styled.img``


export const Text = styled.div`
    font-size: 16px;
    letter-spacing: -0.39px;
    text-align: center;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 500px;
    margin: 10px 0;
`

export const Form = styled.form`
  display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;

`