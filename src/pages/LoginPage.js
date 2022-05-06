import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goToCadastroEnderecoPage, goToHomePage, goToSignUpPage, goToUntitledSectionPage } from '../routes/Coordinator'
import logoRappi4 from '../images/logo-future-eats-invert@2x.png'
import SplashRappi4 from '../images/SplashScreen.png'
import senhaOn from '../images/senhaOn.png'
import senhaOff from '../images/senhaOff.png'

const Body = styled.div`
@media screen and (min-device-width : 360px) and (max-device-width : 480px) {
    width: 350px;
    height: 750px;
}
`

const TitleScreen = styled.img`
@media screen and (min-device-width : 360px) and (max-device-width : 480px) {
    width: 100%;
    height: 100%;
}
`

const Logo = styled.img`
@media screen and (min-device-width : 360px) and (max-device-width : 480px) {
    width: 95px;
    height: 58px;
    margin: 15px 128px 5px;
    object-fit: contain;
}
`

const Title = styled.h3`
@media screen and (min-device-width : 360px) and (max-device-width : 480px) {
    width: 0px;
    height: 42px;
    margin: 16px 0 0 105px;
    padding: 12px 32px;
}
`

const Input = styled.input`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    border: none;
    font-size: 16px;
  }
`

const Container = styled.div`
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  display: grid;
  grid-template-columns: 7fr 1fr;
  width: 345px;
  height: 46px;
  margin: 8px 0px 8px 0;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
 }
`

const Label = styled.label`
 @media screen and (min-device-width : 360px) and (max-device-width : 480px) {
    width: 78px;
    height: 18px;
    margin: 3px 230px 43px 16px;
    font-family: Roboto;
    font-size: 16px;
    letter-spacing: -0.29px;
    color: #b8b8b8;
  }
`

const ButtonLogin = styled.button`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width:350px;
    height: 42px;
    margin: 10px 0 15px 0;
    padding: 10px 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    background-color: #E86E5A;
    border-radius: 2px;
    color: #000;
    border: 1px solid #b8b8b8;
  }
`



const Button = styled.button`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    width:350px;
    height: 42px;
    margin: 10px 0 15px 0;
    padding: 10px 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    background-color: white;
    border-radius: 2px;
    color: black;
    border: none;
  }
`

const ButtonIcon = styled.button`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    text-align: end;
    background-color: white;
    border-radius: 2px;
    color: black;
    border: none;
  }
`

export const LoginPage = () => {
    const navigate = useNavigate()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [noUser, setNoUser] = useState(false)

    const onChangeInputLogin = (event) => {
        const newLogin = event.target.value
        setLogin (newLogin)
    }

    const onChangeInputPassword = (event) => {
        const newPassword = event.target.value
        setPassword (newPassword)
    }

    const showHidePassword = () => {
      setShowPassword(!showPassword)
    }

    const loginFunction = () => {
        setIsLoading(true)

        const mainUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A"
    
        const body = {
            email: login,
            password: password
        }
    
        const header = 'Content-Type: application/json'
      
        axios
            .post(`${mainUrl}/login`, body, header)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                setIsLoading(false)
                if(res.data.user.hasAddress === true) {
                  goToHomePage(navigate)
                } else {
                  goToCadastroEnderecoPage(navigate)
                }
            })
            .catch((err) => {
                setIsLoading(false)
                setNoUser(true)
            })
    }

    return (
        <>
        {isLoading && <TitleScreen src={SplashRappi4} />}
        {!isLoading && (
          <Body>
        <Logo src={logoRappi4} />
        <>
          <Title>Entrar</Title>
          <Label id="login">E-mail:</Label>
          <Container>
          <Input 
            type="email" 
            id="Email..."
            value={login}
            onChange={onChangeInputLogin}
            placeholder={"email@email.com"}
            required
          />
          </Container>
          <Label id="password">Senha:</Label>
          <Container>
          <Input 
            type={showPassword ? "text" : "password"} 
            id="password" 
            value={password}
            onChange={onChangeInputPassword}
            pattern={"^.{6,}$"}
            title={"O nome deve ter no mínimo 6 caracteres"}
            placeholder={"Mínimo 6 caracteres"}
            required
          />
          <ButtonIcon onClick={showHidePassword}> 
            {showPassword ? <img src={senhaOn} alt='Senha amostra'/> : <img src={senhaOff} alt='Senha oculta'/>} 
          </ButtonIcon>
          </Container>
          <br />
          {noUser === true ? <p><b>Usuário não encontrado. Realize o seu cadastro!</b></p> : null }
          <br />
          <ButtonLogin onClick={loginFunction}>Entrar</ButtonLogin>
          <br />
          <Button onClick={() => goToSignUpPage(navigate)}><b>Não possui cadastro? Clique aqui.</b></Button>
        </>
      </Body>
      )}
      </>
    )
}