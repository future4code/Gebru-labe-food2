import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/Coordinator'

export const UntitledSectionPage = () => {
    const navigate = useNavigate()

    return (
        <>
        <h1>Houve um Erro</h1>
        <button onClick={() => goToHomePage(navigate)}>Home Page</button>
        </>
    )
}