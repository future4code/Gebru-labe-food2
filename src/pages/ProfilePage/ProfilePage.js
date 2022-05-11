import React, { useState, useEffect, useContext } from "react";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import axios from "axios";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {AddressDiv, ContainerProfile, ProfileDiv, Button, AddressTitle, DivButton,
} from "./ProfileStyle";
import {
  goToEditAddressPage,
  goToEditProfilePage,
} from "../../routes/Coordinator";
import { useNavigate } from 'react-router-dom';
import {GlobalStateContext} from "../../global/GlobalStateContext";
import Navigation from "../../components/Navigation/Navigation";


export const ProfilePage = () => {
  const { setFullAddress, fullAddress } = useContext(GlobalStateContext);

  const navigate = useNavigate();

  useProtectedPage();

  const [profile, setProfile] = useState({});


  useEffect(() => {
    setFullAddress(fullAddress);
    getProfile();
  }, [fullAddress, setFullAddress]);

  const getProfile = () => {
    axios
      .get(`${BASE_URL}profile`, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfile(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <ContainerProfile>
      <ProfileDiv>
        <div>
          <p>{profile.name}</p>
          <p>{profile.email}</p>
          <p>{profile.cpf}</p>
        </div>
        <Button onClick={() => goToEditProfilePage(navigate)}>
          <EditOutlinedIcon />
        </Button>
      </ProfileDiv>

      <AddressDiv>
        <DivButton>
          <div>
            <AddressTitle>Endereço cadastrado</AddressTitle>
            {profile.address}
          </div>
          <Button onClick={() => goToEditAddressPage(navigate)}>
            <EditOutlinedIcon />
          </Button>
        </DivButton>
      </AddressDiv>

      
      <Navigation screen={0} />
    </ContainerProfile>
  );
};