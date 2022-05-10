import { GlobalStateContext } from "./GlobalStateContext";
import React, { useState } from "react";
import useRequestData from "../hooks/useRequestData";
import {BASE_URL} from "../constants/urls"

const GlobalState = (props) => {
  const [restaurants,  getRestaurants, setRestaurants, loading, error] = useRequestData(
    [],`${BASE_URL}/restaurants`);
  const [cart, setCart] = useState([])
  const [cartRest, setCartRest] = useState([])
  const [buttonCard, setButtonCard] = useState()


  const removeTheFood = (food) => {
      const filterFood = cart.filter((f)=> f.id !== food.id)
      setCart(filterFood)
  }


  const data = {
      cart,
      setCart,
      restaurants,
      getRestaurants,
      setRestaurants,
      loading,
      removeTheFood,
      cartRest,
      setCartRest,
      buttonCard,
      setButtonCard,
      error
  }
  
  return(
      <GlobalStateContext.Provider value={ data }>
      {props.children}
      </GlobalStateContext.Provider>
  )
}

export default GlobalState;