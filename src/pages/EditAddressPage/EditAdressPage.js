import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { StyledForm } from "../../components/Adress/AdressStyle";
import { useForm } from "../../hooks/useForm";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/Header/SubHeader";



export const EditAdressPage = () => {
    
   
    const navigate = useNavigate();

    const { form, onChange, clear } = useForm({
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
      });
    
    return (
       
    <form>
    <h3>Editar Endereço</h3>
      <StyledForm>
        <TextField
          required
          name="street"
          value={form.street}
          onChange={onChange}
          label="Logradouro"
          color="primary"
          variant="outlined"
          placeholder="Rua / Av"
          margin="dense"
        />
        <TextField
          required
          name="number"
          value={form.number}
          onChange={onChange}
          label="Número"
          variant="outlined"
          color="primary"
          placeholder="Número"
          margin="dense"
        />
        <TextField
          name="complement"
          color="primary"
          value={form.complement}
          onChange={onChange}
          label="Complemento"
          placeholder="Apto/Bloco"
          margin="dense"
        />
        <TextField
          required
          name="neighbourhood"
          value={form.neighbourhood}
          onChange={onChange}
          label="Bairro"
          color="primary"
          variant="outlined"
          placeholder="Bairro"
          margin="dense"
        />

        <TextField
          required
          name="city"
          value={form.city}
          onChange={onChange}
          label="Cidade"
          color="primary"
          variant="outlined"
          placeholder="Cidade"
          margin="dense"
        />
        <TextField
          required
          name="state"
          value={form.state}
          onChange={onChange}
          label="Estado"
          color="primary"
          variant="outlined"
          placeholder="Estado"
          margin="dense"
        />
        <Button type="form" font="black" color="primary" variant="contained">
          Salvar
        </Button>
      </StyledForm>
    </form>

       
    )
};

