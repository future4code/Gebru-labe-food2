import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/Coordinator'
import { goToLoginPage } from '../routes/Coordinator'

export const SignUpPage = () => {
    const navigate = useNavigate()

    return (
        <>
        <h1>Página de Cadastro / SignUp</h1>
        <button onClick={() => goToHomePage(navigate)}>Home Page</button>
        <button onClick={() => goToLoginPage(navigate)}>Login Page</button>
        </>
    )
}