import axios from "axios";
import { useContext } from "react";
import { BASE_URL } from "../constants/Urls";
import { GlobalStateContext } from "../global/GlobalStateContext";

//dataUp is a function to take date back to who called.
export const PutAdress = (form, addressUrl, dataUp, getUserData) => {
  const url = `${BASE_URL}/${addressUrl}`;
  axios

    .put(url, form, { headers: { auth: localStorage.getItem("token") } })
    .then((res) => {
      dataUp(res);
    })
    .catch((err) => console.log(err.response));
};