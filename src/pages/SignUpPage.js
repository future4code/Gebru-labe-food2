import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage, goToCadastroEnderecoPage, goToHomePage } from '../routes/Coordinator'
import styled from 'styled-components'
import axios from 'axios'
import { useForm } from '../hooks/useForm'
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

const Logo = styled.img`
@media screen and (min-device-width : 360px) and (max-device-width : 480px) {
    width: 95px;
    height: 58px;
    margin: 15px 128px 5px;
    object-fit: contain;
}
`

const TitleScreen = styled.img`
@media screen and (min-device-width : 360px) and (max-device-width : 480px) {
    width: 100%;
    height: 100%;
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

const ContainerConfirm = styled.div`
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  display: grid;
  grid-template-columns: 7fr 1fr;
  width: 345px;
  height: 46px;
  margin: 8px 0px 8px 0;
  border-radius: 2px;
  border: solid 1px red;
  color: red;
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
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
  }
`

const Button = styled.button`
  @media screen and (min-device-width : 360px) and (max-device-width : 480px) {
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

const ButtonIcon = styled.button`
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    text-align: end;
    background-color: white;
    border-radius: 2px;
    color: black;
    border: none;
  }
`

export const SignUpPage = () => {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)
    const [confirmInput, setConfirmInput] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const mainUrl = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A"
    const headerContent = 'Content-Type: application/json'
    const header = {
        headers: {
            contentType: headerContent,
        }
    }
    const [form, onChange, cleanfields] = useForm({name:'', email:'', cpf:'', password:'', confirm:''})

    const showHidePassword = () => {
      setShowPassword(!showPassword)
    }

    const showHidePassword2 = () => {
      setShowPassword2(!showPassword2)
    }

    const cadastrar = (event) => {
        event.preventDefault()

        setIsLoading(true)

        if (form.password === form.confirm) {
        
        axios
        .post(`${mainUrl}/signup`, form, header)
        .then((res) => {
            setIsLoading(false)
            localStorage.setItem("token", res.data.token)
            goToCadastroEnderecoPage(navigate)
        })
        .catch((err) => {
            setIsLoading(false)
            console(err.res.message);
        })
    
        cleanfields()
        
        } else {
          setIsLoading(false)
          setConfirmInput(false)
        }

        
      }

    return (
        <Body>
        <>
        {isLoading && <TitleScreen src={SplashRappi4} />}
        {!isLoading && (
          <>
            <Logo src={logoRappi4} />
            <Title>Cadastrar</Title>
            <form onSubmit={cadastrar}>
              <Label forhtml="name">Nome*</Label>
              <Container>
              <Input
                name={"name"}
                value={form.name}
                onChange={onChange}
                pattern={"^.{3,}$"}
                title={"O nome deve ter no mínimo 3 caracteres"}
                placeholder={"Nome e sobrenome"}
                required
              />
              </Container>
              <Label forhtml="email"> E-mail*</Label>
              <Container>
              <Input 
                name={"email"}
                value={form.email}
                onChange={onChange}
                type={"email"}
                placeholder={"email@email.com"}
                required
              />
              </Container>
              <Label forhtml="cpf">CPF*</Label>
              <Container>
              <Input 
                name={"cpf"}
                value={form.cpf}
                onChange={onChange}
                pattern={"[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}"}
                title={"O CPF deve ter 11 números"}
                placeholder={"000.000.000-00"}
                required
              />
              </Container>
              <Label forhtml="password">Senha*</Label>
              <Container>
              <Input 
                name={"password"}
                value={form.password}
                onChange={onChange}
                type={showPassword ? "text" : "password"} 
                pattern={"^.{6,}$"}
                title={"A senha deve ter no mínimo 6 caracteres"}
                placeholder={"Mínimo 6 caracteres"}
                required
              />
              <ButtonIcon onClick={showHidePassword}> 
                {showPassword ? <img src={senhaOn} alt='Senha amostra'/> : <img src={senhaOff} alt='Senha oculta'/>} 
              </ButtonIcon>
              </Container>
              <Label forhtml="confirm">Confirmar*</Label>
              { confirmInput ? 
              <Container>
              <Input
                name={"confirm"}
                type={showPassword2 ? "text" : "password"}
                value={form.confirm}
                onChange={onChange}
                pattern={"^.{6,}$"}
                title={"Deve ser a mesma que a anterior"}
                placeholder={"Confirme a senha anterior"}
                required
              />
              <ButtonIcon onClick={showHidePassword2}> 
                {showPassword2 ? <img src={senhaOn} alt='Senha amostra'/> : <img src={senhaOff} alt='Senha oculta'/>} 
              </ButtonIcon>
              </Container>
              :

              <ContainerConfirm>
              <Input
                name={"confirm"}
                type={showPassword ? "text" : "password"}
                value={form.confirm}
                onChange={onChange}
                pattern={"^.{6,}$"}
                title={"Deve ser a mesma que a anterior"}
                placeholder={"Confirme a senha anterior"}
                required
              />
              <ButtonIcon onClick={showHidePassword2}> 
                {showPassword2 ? <img src={senhaOn} alt='Senha amostra'/> : <img src={senhaOff} alt='Senha oculta'/>} 
              </ButtonIcon>
              <p>Deve ser a mesma que a anterior</p>
              </ContainerConfirm>
              }
              <br />
              <Button type={"submit"}>Criar</Button>
            </form>
            <Button onClick={() => goToLoginPage(navigate)}>Voltar para Login</Button>
          </>
        )}
        </>
      </Body>
    )
}