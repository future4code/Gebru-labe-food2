import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/Coordinator'
import { goToCadastroEnderecoPage } from '../routes/Coordinator'

export const MeuCarrinhoPage = () => {
    const navigate = useNavigate()

    return (
        <>
        <h1>Página de Carrinho</h1>
        <button onClick={() => goToHomePage(navigate)}>Home Page</button>
        <button onClick={() => goToCadastroEnderecoPage(navigate)}>Cadastrar Endereço</button>
        </>
    )
}