import React from "react"
import { useNavigate } from "react-router-dom"
import Back from '../../img/back.png'
import CardFood from "../../components/CardFood/CardFood"
import { goToHomePage } from "../../routes/Coordinator"
import CardRestaurant from "../../components/CardRestaurant/CardRestaurant"
import { Container, BackImg, ContainerFoods, PageTittleContainer, TittleNavContainer } from './RestaurantStyle'
import Navigation from "../../components/Navigation/Navigation";

export const RestaurantPage = () => {
  const navigate = useNavigate();

  return (
    <>
    <Container>

      <PageTittleContainer>
        <TittleNavContainer>
        <BackImg src={Back} onClick={() => goToHomePage(navigate)}/>
        <p>Restaurante</p>
        </TittleNavContainer>
      </PageTittleContainer>

      <CardRestaurant />
      <ContainerFoods>
        <CardFood />
      </ContainerFoods>
    </Container>

<Navigation screen={0} />

</>
  )
}

