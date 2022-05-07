import React from 'react';
import Loading from '../../components/Loading/index'
import useUnprotectedPage from '../../hooks/useProtectedPage'
import {useForm} from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import {goToSingUpPage} from '../../routes/Coordinator'
import * as S from './LoginStyle';
import {login } from '../../pages/LoginPage/user'
import {ButtonsContainer, Form, InputWrapper,ButtonWrapper} from './LoginStyle'

export const LoginPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const { form, onChange } = useForm({ email: "", password: "" })

    const onClickLogin = (e) => {
        e.preventDefault()
        login(form, navigate)
    }





    return (
        <S.PageWrap >
      <Loading/>
  
      <S.LogoWrapper>
        <img src={require('../../assets/logo2.svg')} alt='Logo'/>
      </S.LogoWrapper>
      
   

            <h1>Login</h1>
            <Form onSubmit={onClickLogin}>
                <InputWrapper
                    placeholder={"E-mail"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <InputWrapper
                    placeholder={"Senha"}
                    type={"password"}
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <ButtonsContainer>
                     <ButtonWrapper type={"submit"}>Entrar</ButtonWrapper>
                </ButtonsContainer>

            </Form>


        <S.Text>
          <span>Não possui cadastro? <span onClick={() =>goToSingUpPage(navigate)}>Clique aqui</span></span>
         </S.Text>

        </S.PageWrap >
    )
};

