import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToResultadoPage } from '../routes/Coordinator'
import { goToHomePage } from '../routes/Coordinator'
import { goToUntitledSectionPage } from '../routes/Coordinator'
import SearchInput from '../components/SearchInput'
export const BuscaPage = () => {
    const navigate = useNavigate()
    const [text, setText] = useState("")
    
    useEffect(() =>{
        if (text) {
            
        }
    },[text])


    return (
        <>
        <h1>Página de Busca</h1>

        <SearchInput value={text} onChange={(search) => setText(search)}/>

        <button onClick={() => goToResultadoPage(navigate)}>Página de Resultado / Pesquisar</button>
        <button onClick={() => goToHomePage(navigate)}>Home Page</button>
        <button onClick={() => goToUntitledSectionPage(navigate)}>Pagina de Erro</button>
        </>
    )
}