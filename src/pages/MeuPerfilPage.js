import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../routes/Coordinator'
import { goToEditarCadastroEnderecoPage } from '../routes/Coordinator'


export const MeuPerfilPage = () => {
    const navigate = useNavigate()

    return (
        <>
        <h1>Meu Perfil</h1>
        <button onClick={() => goToHomePage(navigate)}>Home Page</button>
        <button onClick={() => goToEditarCadastroEnderecoPage(navigate)}>Editar Cadastro</button>
        </>
    )
}