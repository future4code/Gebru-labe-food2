import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import {GlobalStateContext} from '../../global/GlobalStateContext'
import { Card, CardContent, CardMedia, Typography} from "@mui/material"
import { InfoRestaurant, LoadingStyle, ContainerCard, CardInfos } from './styled'

const CardRestaurant = () => {
    
    const params = useParams()
    const { restaurants, loading } = useContext(GlobalStateContext)
    
    useEffect(() => {

    }, [restaurants])

    const infoRestaurant = restaurants?.restaurants && restaurants?.restaurants
        .filter((rest) => {
            return rest.id === params.id
        })
        .map((rest) => {
            localStorage.setItem("frete", Number(rest.shipping))
            return (
                <ContainerCard key={rest.id}>
                    <Card sx={{display: "flex", flexDirection: "column", justifyContent: "center", borderRadius: 3, border: 1, borderColor: '#c4c4c4', width: 350}}>

                        <CardMedia
                            component="img"
                            height="100"
                            image={rest.logoUrl}
                            alt= {rest.name}
                        />

                        <CardContent>

                            <Typography gutterBottom variant="h6" color="primary" component="div">
                                {rest.name}
                            </Typography>

                            <CardInfos>
                            <Typography gutterBottom variant="body2" color="text.secondary">
                                {rest.category}
                            </Typography>

                            <InfoRestaurant>
                                <Typography variant="body2" color="text.secondary">
                                {rest.deliveryTime - 10} - {rest.deliveryTime} min
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Frete: R${rest.shipping},00
                                </Typography>
                            </InfoRestaurant>

                            <Typography gutterBottom variant="body2" color="text.secondary">
                                {rest.address}
                            </Typography>
                            </CardInfos>

                        </CardContent>

                    </Card>
                </ContainerCard>
            )
        })

    return (
        <div>
            {loading ? <LoadingStyle></LoadingStyle> : infoRestaurant}
        </div >
    )
}

export default CardRestaurant