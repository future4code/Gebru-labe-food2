import React, {useCallback, useContext, useState} from "react";
import { ApiBase } from "../constants/ApiBase";
import GlobalStateContext from "./GlobalStateContext"



const GlobalState = (props) =>{

    const getRestaurants = useCallback(async () => {
        const res = await ApiBase.get("/restaurants");

        return res.data.restaurants;
    })

    return (
        <GlobalStateContext.Provider value={{
            getRestaurants
            }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
