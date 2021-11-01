import "./CartPage.css";
import { useState, Fragment } from "react";
import Button from "./Button";

const CartPage = () => {
  const products = [
    {
      image:
        "https://static.netshoes.com.br/produtos/tenis-nike-sb-chron-2-canvas/06/2IC-3629-006/2IC-3629-006_zoom1.jpg?ts=1630601003",
      alt: "Netshoes",
      title: "Tênis Nike SB Chron 2 Canvas - Preto",
      price: "269,99"
    },
    {
      image:
        "https://princeofstreets.fbitsstatic.net/img/p/tenis-adidas-adiease-preto-by4027-110093/296616.jpg?w=800&h=800&v=no-change",
      alt: "Prince Of Streets",
      title: "Tênis Adidas ADIEASE",
      price: "239,99"
    },
    {
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_945599-MLB44075967300_112020-F.webp",
      alt: "Mercado Livre",
      title: "Tenis Puma Sportswear Smash Platform L Bdb Black Puma Black",
      price: "179,99"
    }
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, event) => {
    setCart([
      ...cart,
      {
        title: product.title,
        price: product.price
      }
    ]);
  };

  return (
    <>
      <div id="content">
        <div id="container">
          <div id="left">
            {products.map((product, index) => {
              return (
                <Fragment key={`${product.name}-${index}`}>
                  <div className="product">
                    <img src={product.image} alt={product.alt} />
                    <div id="p">
                      {/* Aqui vocês devem adicionar o botão de adicionar ao carrinho com aS devidaS props. Este é o mais complexo por usar três props. */}
                      <Button
                        add={true}
                        handleAddToCart= {handleAddToCart}
                        product={product}
                      />
                      <h3>{product.title}</h3>
                      <b>R$ {product.price}</b>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>

          <div id="right">
            <h2>Shopping cart</h2>
            <ul id="cart">
              {cart.map((product, index) => {
                return (
                  <Fragment key={`${product.name}-${index}`}>
                    <li>
                      <h4>{product.title}</h4>
                      <p>{product.price}</p>
                    </li>
                  </Fragment>
                );
              })}
            </ul>

            {/* Aqui vocês devem adicionar o botão de checkout com a devida props. */}
            <Button checkout={true} />
          </div>
        </div>

        {/* Aqui vocês devem adicionar o botão de voltar com a devida props. */}
        <Button home={true} />
      </div>
    </>
  );
};

export default CartPage;
