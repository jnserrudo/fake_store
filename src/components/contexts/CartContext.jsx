import { createContext, useReducer } from "react";
import { useModal } from "../../hooks/useModal";
import { cartReducer } from "../../reducers/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen_cart, closeModal_cart, openModal_cart] = useModal(false);

  const cartInitialState = {
    cant_prod: 0,
    subtotal: 0,
    productos_cart: [],
  };

  const [cart, dispatchCart] = useReducer(cartReducer, cartInitialState);
  const data = {
    isOpen_cart,
    closeModal_cart,
    openModal_cart,
    cart,
    dispatchCart,
  };

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};

export { CartProvider };

export default CartContext;
