import styled from 'styled-components'

export const LoadingStyle = styled.div`
    position: absolute;
    top: 40vh;
    left: 45vw;
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
export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 15px;
  border: 1px solid #c4c4c4;
  width: 340px;
  height: 120px;
`
export const TitleCategory = styled.p`
  width: 100%;
  font-size: 18px ;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`
export const ImgStyle = styled.img`
  border-radius: 15px 0 0 15px;
  width: 112px;
  height: 120px;
`
export const Button = styled.button`
  height: 30px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 120px;
  margin-top: -26px;
  border-top: 1px solid #5cb646;
  border-left: 1px solid #5cb646;
  border-right: none;
  border-bottom: none;
  border-radius: 8px 0 0 0;
  color: #6cc247;
  background: none;
  font-size: 12px;
`

export const DivInfo = styled.div`
  display: flex;
`
export const ConainerBottom = styled.div`
  margin-left: 20px;
  
.popup-wrapper{
  background: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  .popup{
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    margin-top: 13.125rem;
    margin-left: 1.125rem;
    text-align: center;
    width: 100%;
    max-width: 300px;
    padding: 20px;
    background: #fff;
    position: relative;
@media screen and (min-width: 414px){
  margin-top:14.5rem;
  right: -19px;
}
@media screen and (max-width: 360px){
  margin-top:17rem;
  left: -8.5px;
}
@media screen and (max-width: 321px){
  width: 100%;
  max-width: 270px;
  left: -13.5px;
}
}
}
`
export const StyleSelect = styled.select`
  border: 1px solid #c5c5c5;
  background-color: white;
  border-radius: 5px;
  width: 296px;
  height: 56px;
`
export const ContainerPopup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`
export const ButtonPopup = styled.a`
  color: #e86e5a;
  font-family: 'Roboto', sans-serif;
  font-weight: 550;
  font-size: 16px;
  text-transform: uppercase;
`
export const DivButtonPopup = styled.div`
  display: flex;
  margin-left: 100px;
`
export const TitlePopup = styled.p`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 470;
`
export const Description = styled.p`
  font-size: 12px;
  color: #a3a398;
  line-height: 16px;
  margin-top: -10px;
`
export const NameFood = styled.p`
  font-size: 16px;
  color: #5cb646;
`
export const PriceFood = styled.p`
  font-size: 17px;
`

export const CardProductContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border: 1px solid #b8b8b8;
    border-radius: 10px;
    position: relative;
    margin-bottom: 10px;
    img {
        width: 96px;
        height: 112px;
        border-radius: 8px 0px 0px 8px;
    }
  .popup-wrapper{
  background: rgba(0,0,0,.5);
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  .popup{
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    margin-top: 13.125rem;
    margin-left: 0.75rem;
    text-align: center;
    width: 100%;
    max-width: 350px;
    padding-bottom: 20px;
    background: #fff;
    position: relative;
@media screen and (min-width: 414px){
  margin-top:14.5rem;
  right: -19px;
}
@media screen and (max-width: 360px){
  margin-top:17rem;
  left: -8px;
}
@media screen and (max-width: 321px){
  width: 100%;
  max-width: 350px;
  left: -13.5px;
}
}
}
`
export const InfosContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 112px;
    margin-left: 12px;
`

export const TitleInfo = styled.span`
    color: #e86e5a;
`

export const DescInfo = styled.span`
    color: #b8b8b8;
    font-size: 12px;
    margin: 5px 0px 8px;
    height: 30px;
`
export const DescPrice = styled.span`
    color: black;
    font-size: 17px;
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
`

export const ButtonCart = styled.button`
    border: 1px solid black;
    color: black;
    background-color: transparent;
    height: 31px;
    width: 90px;
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 9px 0px;
    cursor: pointer;
`

export const AmountCart = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    color: black;
    background-color: transparent;
    height: 33px;
    width: 33px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0px 9px;
    cursor: pointer;
`
export const DialogTitle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 58px;
    width: 82vw;
    margin-top: 20px;
`
