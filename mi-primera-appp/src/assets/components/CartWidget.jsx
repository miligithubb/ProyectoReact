import "./CartWidget.css";

export const CartWidget = ({ funcion }) => {
  return <button onClick={funcion}>🛒</button>;
};

export default CartWidget;