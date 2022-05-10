import React from "react"
import { ContainerCard } from "./styled"

const Card = ({photo, name, description, price, remove, quantity}) => {

    return (
        <ContainerCard>

            <div className="photo">
                <img src={photo} alt={`foto de um ${name}`}/>
            </div>

            <div className="infos">
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <p className="price">R${price}</p>
            </div>


            <div className="last">
                <button className="quantity">{quantity}</button>
                <button onClick={remove} className="remove">remover</button>
            </div>
        </ContainerCard>
    )
}

export default Card;