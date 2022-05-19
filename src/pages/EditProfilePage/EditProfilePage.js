import React, { useContext, useEffect, useState } from "react"
import axios from "axios";
import {GlobalStateContext} from "../../global/GlobalStateContext";
import { Button, FormHelperText, TextField, Typography } from "@mui/material";
import { PageTittleContainer, TittleNavContainer, BackImg, GlobalStyle, FormContainer} from "./EditProfileStyle"
import {useForm, reset} from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToProfilePage } from "../../routes/Coordinator";
import Back from '../../img/back.png'
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";


export const EditProfilePage = () => {
  
  const { setFullAddress, fullAddress } = useContext(GlobalStateContext);
    
  const navigate = useNavigate();

  const [ user, setUser ] = useState({})
    
    useEffect(() => {
      setFullAddress(fullAddress);
      putProfile();
    }, [fullAddress, setFullAddress]);

    const { form, onChange, clear, reset } = useForm({
        name: "",
        email: "",
        cpf: "",
      });

      const usersRequest = useRequestData([], `${BASE_URL}/profile`)
    
      const putProfile = () => {
        axios
          .put(`${BASE_URL}/profile`, {
            headers: {
              auth: window.localStorage.getItem("token"),
            },
          })
          .then((res) => {
            putProfile(res.data.user);
          })
          .catch((err) => {
            console.log(err);
          });
      };
   
    return (
        <form>
          <GlobalStyle />
            <PageTittleContainer>
              <TittleNavContainer>
                <BackImg src={Back} onClick={() => goToProfilePage(navigate)}/>
                  <p>Editar Perfil</p>
              </TittleNavContainer>
            </PageTittleContainer>
       <FormContainer>
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
        </FormContainer>
      </form>
        
    )
};

