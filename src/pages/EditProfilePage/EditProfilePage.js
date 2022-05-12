import React from "react"
import { Button, FormHelperText, TextField, Typography } from "@mui/material";
import {useForm} from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";






export const EditProfilePage = () => {
    
    const navigate = useNavigate();
    
    

    const { form, onChange, clear } = useForm({
        name: "",
        email: "",
        cpf: "",
      });
    

    
    return (
        <form>
            <h3>Editar Perfil</h3>
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
        
        
        <Button
          variant="contained"
          type="submit"
          color="primary"
          margin={"dense"}
          fullWidth
        >
          Salvar
        </Button>
      </form>
        
    )
};

