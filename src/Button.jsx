const Button = (props) => {
  if (props.home) {
    return <button id="home">Voltar à página inicial</button>;
  } else if (props.checkout) {
    return <button id="checkout">Finalizar agora </button>;
  } else if (props.add) {
    return (
      <>
        <button onClick={() => props.handleAddToCart(props.product)}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="cart"
          />
        </button>
      </>
    );
  } else {
    return <button>Mal configurado</button>;
  }
};

export default Button;
