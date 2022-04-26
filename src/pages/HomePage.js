import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../routes/Coordinator'
import { goToMeuCarrinhoPage } from '../routes/Coordinator'
import { goToMeuPerfilPage } from '../routes/Coordinator'
import { goToBuscaPage } from '../routes/Coordinator'

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <>
        <h1>HomePage</h1>
        <button onClick={() => goToLoginPage(navigate)}>Login</button>
        <button onClick={() => goToMeuCarrinhoPage(navigate)}>Meu Carrinho</button>
        <button onClick={() => goToMeuPerfilPage(navigate)}>Meu Perfil</button>
        <button onClick={() => goToBuscaPage(navigate)}>Buscar</button>
        </>
    )
}