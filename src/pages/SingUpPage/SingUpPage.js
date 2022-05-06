import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { Button, FormHelperText, TextField, Typography } from "@mui/material";
import logo2 from "../../assets/logo2.svg";
import { useForm } from '../../hooks/useForm'
import { useNavigate } from "react-router-dom";
import { MainContainer } from "./SingUpStyle";
import Header from "../../components/Header/Header";

export const SingUpPage = () => {
  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const onChangeFake = (event) => {
    setConfirmPassword(event.target.value);
  };

  const signUp = () => {
    axios
      .post(`${BASE_URL}/signup`, form)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        navigate("/endereco");
      })
      .catch((err) => alert(err.response.data.message));
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp();
    clear();
  };

  return (
    <>

    <Header />
    <MainContainer>
      <img src={logo2} />
      <Typography variant="subtitle1" mt={1}>
        Cadastrar
      </Typography>
      <form onSubmit={onSubmitForm}>
        <TextField
          id="outlined-required"
          name={"name"}
          value={form.name}
          onChange={onChange}
          label={"Nome"}
          placeholder={"Nome e sobrenome"}
          type="text"
          margin={"dense"}
          required
          fullWidth
        />
        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          placeholder={"email@email.com"}
          type="text"
          margin={"dense"}
          required
          fullWidth
        />
        <TextField
          name={"cpf"}
          value={form.cpf}
          onChange={onChange}
          label={"CPF"}
          placeholder={"000.000.000-00"}
          type="text"
          margin={"dense"}
          required
          inputProps={{pattern:"[0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2}"}}
          fullWidth
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          placeholder={"Mínimo 6 caracteres"}
          type="password"
          margin={"dense"}
          required
          fullWidth
        />
        <TextField
          name={"password"}
          value={confirmPassword}
          onChange={onChangeFake}
          label={"Confirmar"}
          placeholder={"Confirme a senha anterior"}
          type="password"
          margin={"dense"}
          fullWidth
          required
        />
        {form.password !== confirmPassword  ? 
            <FormHelperText color="primary" id="component-error-text">Deve ser a mesma que a anterior</FormHelperText> : 
            <></>}
        <Button
          variant="contained"
          type="submit"
          color="primary"
          margin={"dense"}
          fullWidth
        >
          Criar
        </Button>
      </form>
    </MainContainer>
    </>
  );
};
