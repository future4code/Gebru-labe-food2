import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../routes/Coordinator'
import { goToEditAdressPage } from '../../routes/Coordinator'

export const CartPage = () => {
    const navigate = useNavigate()

    return (
        <>
        <h1>Página de Carrinho</h1>
        <button onClick={() => goToHomePage(navigate)}>Home Page</button>
        <button onClick={() => goToEditAdressPage (navigate)}>Cadastrar Endereço</button>
        </>
    )
}