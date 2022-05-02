import React, { useContext, useState, useEffect } from "react";
import axios from 'axios'
import { BASE_URL } from "../../constants/Url"
import GlobalContext from "../../global/GlobalStateContext";
import { useRequestData } from "../../hooks/useRequestData";
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../routes/Coordinator'
import { goToCadastroEnderecoPage } from '../../routes/Coordinator'
import { MessageArea } from "../../assets/alert"
import {CardProduto} from "../../components/CardProduto/CardProduto"
import {
    CartContainer,
    MainContainer,
    AdressCard,
    RestaurantName ,
    ProductContainer,
    PaymentOptions,
    PriceContainer,
    Freight,
    Price,
    EmptyCart,
  } from "./styled";

export const MeuCarrinhoPage = () => {
    const navigate = useNavigate()
    const {
        carrinho,
        setCarrinho,
        pedido,
        setPedido,
        restaurantePedido,
        setRestaurantePedido,
        removerProduto,
      } = useContext(GlobalContext);
      const [precoTotal, setPrecoTotal] = useState(0);
      const perfil = useRequestData([], `${BASE_URL}/profile`);
      const [data, setData] = useState("");

    const PlaceOrder = (body, id, setData, navigate) => {
        axios
          .post(`${BASE_URL}/restaurants/${id}/order`, body, {
            headers: {
              auth: localStorage.getItem("token"),
            },
          })
          .then((res) => {
            setData(res.data);
            MessageArea.fire({title: "Pedido realizado com sucesso",
              background: "#e86e5a",
              color: "#ffffff",
            });
            goToHomePage(navigate)
          })
          .catch((err) => {
            MessageArea.fire({title: err.response.data.message, icon: "error"});
          });
      };

      const confirmarPedido = () => {
        if (
          carrinho.paymentMethod !== "" &&
          carrinho.products.length > 0 &&
          restaurantePedido.id !== ""
        ) {
          PlaceOrder(carrinho, restaurantePedido.id, setData, navigate);
          setPedido([]);
          setRestaurantePedido({
            id: "",
            address: "",
            deliveryTime: "",
            shipping: "",
            name: "",
          });
          setCarrinho({
            products: [],
            paymentMethod: "",
          });
        }
      };
    
      useEffect(() => {
        valorTotal();
      }, []);
    
      useEffect(() => {}, [carrinho, restaurantePedido, pedido]);
    
      const valorTotal = () => {
        let precoTotal = 0;
        let item;
        for (const produto of pedido) {
          item = carrinho.products.find((item) => item.id === produto.id);
          if (item && Object.keys(item).length > 0) {
            precoTotal += produto.preco * item.quantity;
          }
        }
        setPrecoTotal(precoTotal);
      };

    return (
        <>
        <CartContainer>
        <h1>Página de Carrinho</h1>
      <MainContainer>
        {restaurantePedido && (
          <div>
            <section>
              {perfil.user && (
                <AdressCard>
                  <p>Endereco de Entrega</p>
                  <p>{perfil.user.address}</p>
                </AdressCard>
              )}
            </section>
            <ProductContainer>
              {pedido.length > 0 &&  (
                <div>
                  <RestaurantName>{restaurantePedido.name}</RestaurantName>
                  <p>{restaurantePedido.address}</p>
                  <p>{restaurantePedido.deliveryTime} min.</p>
                </div>
              )}
            </ProductContainer>
            <section>
              {pedido.length > 0 ? (
                <ProductContainer>
                  {pedido.map((produto) => (
                    <CardProduto
                      key={produto.id}
                      imagem={produto.imagem}
                      nome={produto.nome}
                      descricao={produto.descricao}
                      preco={produto.preco}
                      id={produto.id}
                      removerProduto={removerProduto}
                    />
                  ))}
                </ProductContainer>
              ) : (
                <div>
                  <EmptyCart>Carrinho vazio</EmptyCart>
                </div>
              )}
            </section>
            <PriceContainer>
              <Freight>
                {" "}
                {restaurantePedido.id ? (
                  <>
                    <p>Frete</p>
                    <p>R${restaurantePedido.shipping},00</p>
                  </>
                ) : (
                  <>
                    <p>FRETE</p>
                    <p>R$0,00</p>
                  </>
                )}
              </Freight>

              <Price>
                {precoTotal && restaurantePedido.shipping ? (
                  <>
                    <p>SUBTOTAL</p>
                    <p>
                      {" "}
                      R$
                      {(precoTotal + restaurantePedido.shipping)
                        .toFixed(2)
                        .replace(".", ",")}
                    </p>
                  </>
                ) : (
                  <>
                    <p>SUBTOTAL</p>
                    <p>R$00,00</p>
                  </>
                )}
              </Price>
            </PriceContainer>
            <PaymentOptions>
              <p>Forma de pagamento</p>
              <form onSubmit={(ev) => ev.preventDefault()}>
                <div>
                  <input
                    type="radio"
                    id="dinheiro"
                    name="paymentmethod"
                    onChange={() =>
                      setCarrinho({ ...carrinho, paymentMethod: "money" })
                    }
                  />
                  <label htmlFor="dinheiro">Dinheiro</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="cartao"
                    name="paymentmethod"
                    onChange={() =>
                      setCarrinho({ ...carrinho, paymentMethod: "creditcard" })
                    }
                  />
                  <label htmlFor="cartao">Cartão de crédito</label>
                </div>
                <button
                  onClick={() => confirmarPedido()}
                  type={"button"}
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={!carrinho.products || !carrinho.paymentMethod}
                >
                  Confirmar
                </button>
              </form>
            </PaymentOptions>
          </div>
        )}
      </MainContainer>
    </CartContainer>
        <button onClick={() => goToHomePage(navigate)}>Home Page</button>
        <button onClick={() => goToCadastroEnderecoPage(navigate)}>Cadastrar Endereço</button>
        </>
  );
};