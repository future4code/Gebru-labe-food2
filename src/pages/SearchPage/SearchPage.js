import React, {useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../routes/Coordinator'
import {GlobalStateContext} from '../../global/GlobalStateContext'

export const SearchPage = () => {
    const navigate = useNavigate()
    const [text, setText] = useState("")
    const  getRestaurants  = useContext(GlobalStateContext)
    useEffect(() =>{
        if (text) {
            fetch(getRestaurants())
            .then((response) => response.json)
            .then((response) => {
                console.log(response)
            })
        }
    },[text])


    return (
        <>
        <h1>Página de Busca</h1>

        {/*<SearchInput value={text} onChange={(search) => setText(search)}/>*/}

        {/* <button onClick={() => goToResultadoPage(navigate)}>Página de Resultado / Pesquisar</button> */}
        <button onClick={() => goToHomePage(navigate)}>Home Page</button>
        {/* <button onClick={() => goToUntitledSectionPage(navigate)}>Pagina de Erro</button> */}
        </>
    )
}