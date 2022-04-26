import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/Coordinator'
import { goToSignUpPage } from '../routes/Coordinator'

export const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <>
        <h1>Página de Login</h1>
        <button onClick={() => goToHomePage(navigate)}>Home Page</button>
        <button onClick={() => goToSignUpPage(navigate)}>Realizar Novo Cadastro</button>
        </>
    )
}