import React, { useContext, useState, useEffect } from "react";
import axios from 'axios'
import { BASE_URL } from "../../constants/Url"
import GlobalContext from "../../global/GlobalStateContext";
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../routes/Coordinator'
import { goToCadastroEnderecoPage } from '../../routes/Coordinator'



export const MeuCarrinhoPage = () => {
    const navigate = useNavigate()
    
    return (
        <>
        
        <button onClick={() => goToHomePage(navigate)}>Home Page</button>
        <button onClick={() => goToCadastroEnderecoPage(navigate)}>Cadastrar Endereço</button>
        </>
  );
};