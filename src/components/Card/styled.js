import styled from "styled-components"

export const ContainerCard = styled.div`
display: grid;
grid-template-columns: 115px 1fr 99px;
width: 370px;
height: 114px;
border: 1px solid #b8b8b8;
border-radius: 10px 10px 10px 10px;
margin-bottom: 10px;
.photo{
  img{
    height: 113px;
    width: 115px;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
  }
}
.infos{
    width: 100px;
    height: 113px;
    margin-left: 15px;
    .name{
        color: #e86e5a;
        width: 250px;
        font-weight: bolder;
        margin: 10px 0px 10px 0px;
    }
    .description{
        font-size: 14px;
        width: 250px;
        margin: 16px 0px;
        color: #b8b8b8;
    }
    .price{
        margin: 10px 0px 0px 0px;
        font-size: 16px;
        color: #000;
        letter-spacing: -0.39px;
    }
}
.last{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100px;
  height: 113px;
    
  .quantity{
    width: 33px;
    height: 33px;
    margin: 0px 0px 0px 16px;
    padding: 7px 12px;
    border-radius: 0px 10px;
    border: solid 1px #e86e5a;
    color: #e86e5a;
    background: transparent;
  }
  .remove{
    width: 88px;
    height: 27px;
    border-radius: 8px 0px 8px 0px;
    border: 1px solid #e02020;
    background: transparent;
    color: #e02020;
  }
}
`