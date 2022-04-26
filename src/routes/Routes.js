import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BuscaPage } from '../pages/BuscaPage'
import { CadastroEnderecoPage }  from '../pages/CadastroEnderecoPage'
import { EditarCadastroEnderecoPage } from '../pages/EditarCadastroEnderecoPage'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { MeuCarrinhoPage } from '../pages/MeuCarrinhoPage'
import { MeuPerfilPage } from '../pages/MeuPerfilPage'
import { ResultadoPage } from '../pages/ResultadoPage'
import { SignUpPage } from '../pages/SignUpPage'
import { UntitledSectionPage } from '../pages/UntitledSectionPage'

const Routess = () => {
    return (
        <BrowserRouter>
          <Routes>
              <Route index element = {<HomePage />} />
              <Route path = 'Busca' element = {<BuscaPage />} />
              <Route path = 'CadastroEndereco' element = {<CadastroEnderecoPage />} />
              <Route path = 'EditarCadastroEndereco' element = {<EditarCadastroEnderecoPage />} />
              <Route path = 'Login' element = {<LoginPage />} />
              <Route path = 'MeuCarrinho' element = {<MeuCarrinhoPage />} />
              <Route path = 'MeuPerfil' element = {<MeuPerfilPage />} />
              <Route path = 'Resultado' element = {<ResultadoPage />} />
              <Route path = 'SignUp' element = {<SignUpPage />} />
              <Route path = 'Erro' element = {<UntitledSectionPage />} />
          </Routes>
        </BrowserRouter>
    )
}

export default Routess