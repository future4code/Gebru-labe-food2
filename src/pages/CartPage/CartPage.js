import React, { useContext } from "react"
import Payments from "./Payments/Payments"
import {GlobalStateContext} from "../../global/GlobalStateContext"
import { ContainerCart, PageTittleContainer, TittleNavContainer, PriceStyle } from "./CartStyle"
import Navigation from "../../components/Navigation/Navigation"
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls"
import Card from "../../components/Card/Card"

export const CartPage = () => {
  const { cart, setCart, removeTheFood, cartRest } = useContext(GlobalStateContext)
  const profile = useRequestData([], `${BASE_URL}/profile`)
  const [restaurant] = useRequestData([], `${BASE_URL}/restaurants/${cartRest}`)
console.log(restaurant)


  const valueAll = () => {
    let valueAllCart = 0
    for (let valueCart of cart) {
      valueAllCart = valueCart.price * valueCart.quantity;
    }
    return valueAllCart

  }

  return (
    <>
      <PageTittleContainer>
        <TittleNavContainer>
          <p>Meu carrinho</p>
        </TittleNavContainer>
      </PageTittleContainer>

      <ContainerCart>

        <div className="address">
          <p className="p1">Endereço de entrega</p>
          <p className="p2">{profile[0]?.user?.address}</p>
        </div>

        <div className="addressRes">
          {cart.length === 0 ? "" :
            <div >
              <p className="p1">{restaurant?.restaurant?.name}</p>
              <p className="p2">{restaurant?.restaurant?.address}</p>
              <p className="p3">{restaurant?.restaurant?.deliveryTime} min</p>
            </div>
          }
        </div>

        <div>
          {cart.length === 0 ? <p>Carrinho vazio</p> : cart.map((food) => {
            return (
              <Card
                key={food.id}
                photo={food.photoUrl}
                name={food.name}
                description={food.description}
                price={food.price}
                quantity={food.quantity}
                remove={() => removeTheFood(food)}
              />
            )
          })}
        </div>

        <div className="payments">

          <div className="frete">
            <p>Frete R$</p>
            {cart.length === 0 ? <p>0,00</p> : <p>{restaurant?.restaurant?.shipping}</p>}
          </div>

          <div className="priceAll">
            <h4>SUBTOTAL </h4>
            {cart.length === 0 ? <PriceStyle>R$0,00</PriceStyle> : <PriceStyle>R${valueAll()}</PriceStyle>}
          </div>

          <div className="paymentsButton">
            <Payments cart={cart} resId={cartRest} />
          </div>

        </div>

        <Navigation className="navbar" />
      </ContainerCart>
    </>
  )
}
