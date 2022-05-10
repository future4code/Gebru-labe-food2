import styled from "styled-components";
import { Button} from "@mui/material";
import { FormGroup } from "@mui/material";

export const ContainerForm = styled.div`
.paymentTitle{
    padding-bottom: 5px;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 1px solid #000;
    width: 100%;
    margin: 5px;
}
.button{
    position: fixed;
    display: flex;
    justify-content: flex-start;   
    width: 100%;
    bottom: 8vh;
    margin-bottom: 15px;
}
`
export const ButtonS = styled(Button)`
width: 90%;
border-radius: 1px;
`
export const ButtonStyle = styled.button`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 550;
    background-color: #5cb646;
    border: none;
    border-radius: 4px;
    height: 42px;
    width: 90%;
    align-items: center;
:hover{
    background-color: #A2E884;
}
`
export const FormPayment = styled(FormGroup)`
width: 100%;
margin: 0px 5px 0px 13px;
`
export const PaymentTitle = styled.h1`
  width: 100%;
  font-size: 16px ;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  margin-right: 16px;
`
   