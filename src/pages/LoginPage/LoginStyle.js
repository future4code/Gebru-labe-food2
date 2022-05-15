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
      width: 70vw;
    height: 30px;
    border: solid 1px #b8b8b8;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0 0 15px 0;
`
export const ButtonWrapper = styled.button`
   width: 100%;
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  border: none;
  font-size:18px;
  background-color:#E86E5A;

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
    width: 320px;
    margin: 10px 0;
    /* border:solid 1px; */
`

export const Form = styled.form`
  display: flex;
    flex-direction: column;
    align-items: center;
    width: 65%;

`
// export const TextStyle = styled.h1`
// width: 296px;
//   height: 18px;
//   font-family:Georgia, 'Times New Roman', Times, serif;
//   font-size: 16px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: normal;
//   letter-spacing: -0.39px;
//   text-align: center;
//   color: #000;
// `