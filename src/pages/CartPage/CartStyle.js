import styled from "styled-components";

export const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 52.5px;
    width: 100%;
    height: 100%;
    padding-bottom: 600px;
    overflow-y: auto;
    ::-webkit-scrollbar{
        display: none;
}
.myCart{
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #dfdfdf;
    width: 100%;
    height: 35px;
    margin-bottom: 0px;
}
.address{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    
    background-color: #eeeeee;
    height: 12vh;
    width: 100%;
    .p1{
        font-family: 'Roboto', sans-serif;
        font-weight: 550;
        color: #b8b8b8;
        width: 90%;
        margin-bottom: 0px;
    }
    .p2{
        font-family: 'Roboto', sans-serif;
        font-weight: 550;
        color: #000;
        font-size: 16px;
        width: 90%;
        margin-top: 0px;
    }
}
.addressRes{
    width: 100%;
    div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    width: 100%;
    .p1{
        font-family: 'Roboto', sans-serif;
        font-weight: 550;
        color: #5cb646;
        width: 90%;
        margin-bottom: 5px;
    }
    .p2{
        font-family: 'Roboto', sans-serif;
        font-weight: 550;
        color: #b8b8b8;
        font-size: 16px;
        width: 90%;
        margin: 0px 0px 5px 0px;
    }
    .p3{
        color: #b8b8b8;
        font-size: 16px;
        width: 90%;
        margin: 0px 0px 10px 0px;
    }
    }
    
}
.payments{
    display: flex;
    flex-direction: column;
    width: 90%;
    .frete{
        display: flex;
        width: 100%;
        justify-content: flex-end;
        height: 30px;
        .p{
            font-family: 'Roboto', sans-serif;
            font-weight: 550;
        }
    }
    .priceAll{
        display: flex;
        justify-content: space-between;
    }
}
.navbar{
    width: 100%;
}
`
export const PriceStyle = styled.p`
    color: #e86e5a;
    font-weight: 600;
`
export const PageTittleContainer = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 1;
`
export const TittleNavContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    margin-top: 20px;
    width: 360px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
`