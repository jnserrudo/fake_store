import { useContext } from "react";
import { types } from "../actions/cartAction";

import CartContext from "../components/contexts/CartContext";

const sum=(newCart)=>{
    let sum= 0
    for (let x of newCart) {
        sum += x.price * x.cant;
    }
    return sum
}

export const cartReducer = (state, action) => {
  

  switch (action.type) {
    case types.add_to_cart:
      //con el id que recibimos del payload del dispatch, vamos a buscar entre los productos que ya existen, para obtener los demas datos
      let Prod = state.productos_cart.find(
        (prod) => prod.id == action.payload.id
      );
      let newCart
      if (Prod) {
        newCart = state.productos_cart.map((p) =>
          p.id == Prod.id ? { ...p, cant: p.cant + 1 } : p
        );
      } else {
        newCart = [...state.productos_cart, { ...action.payload, cant: 1 }];
      }
      
      return { ...state, subtotal: sum(newCart), productos_cart: newCart };

    case types.remove_one_from_cart:
      let itemToDel = state.productos_cart.find(
        (prod) => prod.id === action.payload.id
      );
      let newCart2 = state.productos_cart.map((item) =>
        item.id === itemToDel.id
          ? {
              ...item,
              cant: item.cant - 1,
            }
          : item
      );
      
      return {...state, subtotal: sum(newCart2), productos_cart: newCart2};

    case types.remove_all_from_cart:
      let itemToDelAll = state.productos_cart.find(
        (prod) => prod.id === action.payload.id
      );
      let newCart3 = state.productos_cart.filter(
        (item) => item.id != itemToDelAll.id
      );
      
      return {...state, subtotal: sum(newCart3), productos_cart: newCart3};


    case types.clear_cart:
      return {
        ...state,
        productos_cart: [],
      };

    default:
      return state;
  }
};
