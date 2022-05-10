import React, { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from "../../constants/urls";
import {GlobalStateContext} from '../../global/GlobalStateContext'
import { StyleSelect, ButtonPopup, TitlePopup, ContainerPopup, DivButtonPopup, TitleCategory,
CardProductContainer, InfosContainer, TitleInfo, DescInfo, DescPrice, ButtonCart} from './styled'

const CardFood = () => {
    const [amount, setAmount] = useState(0)
    const [food, setFood] = useState([])
    const { cart, setCart } = useContext(GlobalStateContext)
    const params = useParams()
    const [foods] = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)

    const openQuantity = (food) => {
        document.querySelector(`.popup-wrapper`).style.display = `block`
        setFood(food)
    }
    const exitQuantify = () => {
        document.querySelector(`.popup-wrapper`).style.display = `none`
    }

    const addToCart = () => {
        const quantity = Number(amount)
        const newCart = [...cart]
        const findIndex = newCart.findIndex((productCart) => {
            return productCart.id === food.id;
        })
        if (findIndex === -1) {
            newCart.push({ ...food, quantity })
        } else {
            alert("item ja exite no carrinho")
        }
        setCart(newCart)
        exitQuantify()
    }

    const onChange = (e) => {
        setAmount(e.target.value)
    }

    const listOfCategories = foods.restaurant && foods.restaurant.products.map((food) => {
        return food.category
    })

    const onlyCategories = [...new Set(listOfCategories)]

    const divisionCategories = onlyCategories && onlyCategories.map((type) => {
        return (
            <div key={type}>
                <TitleCategory>{type}</TitleCategory>
                {foods.restaurant && foods.restaurant.products.filter((cat) => {
                    return cat.category === type
                })
                    .map((food) => {

                        return (
                            <CardProductContainer key={food.id}>
                                <img src={food.photoUrl} alt={food.name} />
                                <InfosContainer>
                                    <TitleInfo>{food.name}</TitleInfo>
                                    <DescInfo>{food.description}</DescInfo>
                                    <DescPrice>R$ {food.price} </DescPrice>
                                </InfosContainer>
                                {food.quantify}

                                <>
                                    <ButtonCart color={"black"} onClick={() => openQuantity(food)}>adicionar</ButtonCart>
                                </>

                                <div className="popup-wrapper">
                                    <div id="popup" className="popup">
                                        <ContainerPopup>
                                            <TitlePopup>Selecione a quantidade desejada</TitlePopup>
                                            <StyleSelect onChange={onChange}>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9</option>
                                                <option>10</option>
                                            </StyleSelect>
                                            <DivButtonPopup>
                                                <ButtonPopup onClick={() => addToCart()}>Adicionar ao carrinho</ButtonPopup>
                                            </DivButtonPopup>
                                        </ContainerPopup>
                                    </div>
                                </div>
                            </CardProductContainer >
                        )
                    })}
            </div>
        )
    })

    return (
        <div>
            {divisionCategories}
        </div >
    )
}

export default CardFood;