import styled from 'styled-components'
import { Box, CardMedia } from '@mui/material'

export const InfoRestaurant = styled(Box)`
  display: flex;
  gap: 30px;
`
export const BoxBotton = styled(Box)`
display: flex;
justify-content: space-between;
`
export const StyleButton = styled.button`
font-size: 16px;
padding-top: 8px;
padding-left: 15px;
border-color: #6AC453;
color: #6AC453;
background: white;
border-radius: 8px 0px 0px 0px;
:hover{
  background-color: #E2FFD5;
}
`
export const CardMediaStyle = styled(CardMedia)`
    display: flex;
    justify-content: flex-start;
    width: 150px;
`
export const LoadingStyle = styled.div`
    position: absolute;
    top: 40vh;
    left: 40vw;
    border: 6px solid #BEFFA2;
    border-top-color: #6CC247;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: is-rotating 2s infinite;
    @keyframes is-rotating {
    to {
    transform: rotate(1turn);
    }
}
`
export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
@media screen and (max-width: 376px){ 
   margin: 20px;
}
@media screen and (max-width: 321px){ 
   width: 315px;
}
`
export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
