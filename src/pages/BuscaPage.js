import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToResultadoPage } from '../routes/Coordinator'
import { goToHomePage } from '../routes/Coordinator'
import { goToUntitledSectionPage } from '../routes/Coordinator'

export const BuscaPage = () => {
    const navigate = useNavigate()

    return (
        <>
        <h1>Página de Busca</h1>
        <button onClick={() => goToResultadoPage(navigate)}>Página de Resultado / Pesquisar</button>
        <button onClick={() => goToHomePage(navigate)}>Home Page</button>
        <button onClick={() => goToUntitledSectionPage(navigate)}>Pagina de Erro</button>
        </>
    )
}