import React, { useContext, useState } from 'react'
import CartContext from './contexts/CartContext'
import { Modal } from './Modal'
import '../components/Modal.css';
import { Prod_cart } from './Prod_cart';
import { types } from '../actions/cartAction';


export const Cart = () => {
  const {isOpen_cart,closeModal_cart,openModal_cart,cart,dispatchCart}=useContext(CartContext)
  const [term_cond, setTerm_cond] = useState(false)
  
  const handleChange=()=>{
        setTerm_cond(!term_cond)
  }

  const tramitarPedido=()=>{
    if(term_cond){
        console.log("tramitar pedido")
    }else{
        console.log("debe aceptar los terminos y condiciones")
    }
    
  }
  return (
    <div className='carrito' >
        <Modal isOpen={isOpen_cart} closeModal={closeModal_cart} >
            {/* DEBO PONER UNA CONDICION CON UNA VARIABLE PARA EVALUAR SI EL CARRITO TIENE ALGO
            PORQUE SI NO TIENE NADA, DEBE MOSTRAR EL MENSAJE "TU CESTA ESTA VACIA" */}

            {cart.productos_cart.length>0?<>
                <p>Tu Carrito</p>
                <div className="cont_prod_cart">
                    {/* aca se listara los productos del carrito */}
                    {cart.productos_cart.map(prod=><Prod_cart key={prod.id} data={prod} />)}
                </div>
                <p>COMENTARIOS SOBRE TU PEDIDO</p>            
                <p>SUBTOTAL ${cart.subtotal.toFixed(2)}</p>
                <div className="cont_option_cart">
                    {!term_cond&&<p style={{color:"red"}}>***</p>} 
                    <label htmlFor="term_cond"> ACEPTO LOS TERMINOS Y CONDICIONES</label>
                    {!term_cond&&<p style={{color:"red"}}>***</p>}

                    <input type="checkbox" name="" id="term_cond" onChange={handleChange}  />
                    <button onClick={tramitarPedido} >TRAMITAR TU PEDIDO</button>
                    <button onClick={()=>dispatchCart({type:types.clear_cart})} >Vaciar Carrito</button>
                    
                </div>
                
            </>:
            <>
            <p>Carrito Vacio</p>
            </>
            }
            
        </Modal>
    </div>
  )
}
