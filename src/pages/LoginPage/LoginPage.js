import React from 'react';
import Loading from '../../components/Loading/index'
import useUnprotectedPage from '../../hooks/useProtectedPage'
import {useForm} from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import {goToSingUpPage} from '../../routes/Coordinator'
import * as S from './LoginStyle';
import {login } from '../../pages/LoginPage/user'
import {ButtonsContainer, Form, InputWrapper,ButtonWrapper, TextStyle} from './LoginStyle'
import { TextField, Typography } from "@mui/material";

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
      
   

            <Typography>Login</Typography>
            <Form onSubmit={onClickLogin}>
                <TextField
                    sx={{
                        width: 320,
                        margin: 2
                      }}
                    label={"E-mail"}
                    placeholder={"E-mail"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <TextField
                    sx={{
                        width: 320,
                        margin: 2
                      }}
                    label={"Senha"}
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
          <Typography>Não possui cadastro? <span onClick={() =>goToSingUpPage(navigate)}>Clique aqui</span></Typography>
         </S.Text>

        </S.PageWrap >
    )
};

