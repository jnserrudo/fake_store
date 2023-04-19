import React, { useContext } from "react";
import { Cart } from "./Cart";
import CartContext from "./contexts/CartContext";
import { Modal } from "./Modal";
import { Navegador } from "./Navegador";
export const Header = () => {
  const {isOpen_cart,closeModal_cart,openModal_cart}=useContext(CartContext)
  return (
    <header className="header">
      <div className="header_cont">
        <div className="header_left">
          <a href="" className="enlace_cto">
            Buscar
          </a>
          <a href="" className="enlace_cto">
            Contacto
          </a>
          <a href="" className="enlace_cto">
            WhatsApp
          </a>
        </div>
        <div className="header_right">
          <img src="../src/assets/instagram.png" className="icon" alt="aa" />
          <img src="../src/assets/facebook.png" className="icon" alt="" />
          <img src="../src/assets/pinterest.png" className="icon" alt="" />
          <img src="../src/assets/tik-tok.png" className="icon" alt="" />

          <select name="" id="">
            <option value="es">Español</option>
            <option value="en">Ingles</option>
          </select>
        </div>
      </div>

      <div className="header_cont_center">
        <img src="../src/assets/buscador.png" className="icon header_icon" alt="" />
        <h1>JNSIX</h1>
        <div className="header_cont_center__icons">
          <img src="../src/assets/hombre.png" className="icon header_icon" alt="" />
          <img src="../src/assets/favorite.png" className="icon header_icon" alt="" />
          <img onClick={openModal_cart} src="../src/assets/cart.png" className="icon header_icon" alt="" />

        </div>
      </div>
      <Navegador />
      <Cart/>
    </header>
    
  );
};
