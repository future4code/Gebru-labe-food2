import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../routes/Coordinator'

export const EditAdressPage = () => {
    const navigate = useNavigate()

    return (
        <>
        <h1>Página Editar Cadastro e Endereço</h1>
        <button onClick={() => goToHomePage(navigate)}>Home Page</button>
        </>
    )
}