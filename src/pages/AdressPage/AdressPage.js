import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../../routes/Coordinator'
import { useForm } from '../../hooks/useForm'
import TextField from '@mui/material/TextField';
import  useProtectedPage from '../../hooks/useProtectedPage'
import { InputContainer, GlobalStyle, ImgBack, TelaCadEndContainer, Title } from './styled';
import back from '../../img/back.png'
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
 

export const AdressPage = () => {

    useProtectedPage()

    const navigate = useNavigate()

    const [form, onChange] = useForm({ street: "", number: "", complement: "", neighbourhood: "", city: "", state: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        const headers = {
            auth: localStorage.getItem('token')
        }
        console.log(form)
        axios
        .put(`${BASE_URL}/address`, form, {headers})
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            alert('Endereço atualizado!')
            goBack(navigate)
        })
        .catch()
    }

    return (
        <TelaCadEndContainer>
        <GlobalStyle />
        <form onSubmit={onSubmitForm} >
        <ImgBack>
        <img src={back} alt= " " onClick={() => goBack(navigate)}/>
        </ImgBack>
        <Title>Meu endereço</Title>
        <InputContainer>
        <TextField label="Logradouro" name={'street'} placeholder={'Rua / Av.'} required type={'text'} value={form.street} onChange={onChange} />
        <TextField label="Número" name={'number'} placeholder={'Número'} required type={'number'} value={form.number} onChange={onChange} />
        <TextField label="Complemento" name={'complement'} placeholder={'Apto. / Bloco'} type={'name'} value={form.complement} onChange={onChange} />
        <TextField label="Bairro" name={'neighbourhood'} placeholder={'Bairro'} required type={'text'} value={form.neighbourhood} onChange={onChange} />
        <TextField label="Cidade" name={'city'} placeholder={'Cidade'} required type={'text'} value={form.city} onChange={onChange} />
        <TextField label="Estado" name={'state'} placeholder={'Estado'} required type={'text'} value={form.state} onChange={onChange} />
        <button>Salvar</button>
        </InputContainer>
        </form>
        </TelaCadEndContainer>
    )
}