import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/Coordinator'

export const ResultadoPage = () => {
    const navigate = useNavigate()

    return (
        <>
        <h1>Página de Resultado</h1>
        <button onClick={() => goToHomePage(navigate)}>Home Page</button>
        </>
    )
}