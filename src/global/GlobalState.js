import { GlobalStateContext } from "./GlobalStateContext";
import React, { useState, useEffect } from "react";
import useRequestData from "../hooks/useRequestData";
import {BASE_URL} from "../constants/urls"
import axios from "axios";

const GlobalState = (props) => {
  const [restaurants,  getRestaurants, setRestaurants, loading, error] = useRequestData(
    [],`${BASE_URL}/restaurants`);
  const [cart, setCart] = useState([])
  const [cartRest, setCartRest] = useState([])
  const [buttonCard, setButtonCard] = useState()
  const [fullAddress, setFullAddress] = useState ({})

  useEffect(() => {
    axios
      .get(`${BASE_URL}profile/address`, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setFullAddress(res.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fullAddress]);

  const removeTheFood = (food) => {
      const filterFood = cart.filter((f)=> f.id !== food.id)
      setCart(filterFood)
  }


  const data = {
      cart,
      setCart,
      fullAddress,
      setFullAddress,
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