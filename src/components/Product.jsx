import React, { useContext } from 'react'
import { useModal } from '../hooks/useModal'
import { Modal } from './Modal'
import '../components/Modal.css';
import CartContext from './contexts/CartContext';
import { types } from '../actions/cartAction';


export const Product = ({data}) => {
    const { category,description,id,image,price,rating,title}=data
    const [isOpen,closeModal,openModal]=useModal(false)
    const {isOpen_cart, closeModal_cart, openModal_cart,cart, dispatchCart } = useContext(CartContext)

    const addCarrito=()=>{
      //debemos activar el modal del carrito con el producto que fue seleccionado
      //puede ser a traves de un contexto o quizas usar el id que obtenemos 
      //de la data, o juntos
      console.log(id,cart)
      dispatchCart({type:types.add_to_cart, payload:data})
      closeModal()
      openModal_cart()
    }
  return (
    <>
      <div className='product' onClick={openModal}>
        {rating.count<150&&<div className="stock">
          <p>Stock Bajo!</p>
        </div>}
        
          <img src={image} className="img_product" alt="" />
          <p>{title}</p>
          <p className='txt_categoria' >{category}</p>
          <p> ${price}</p>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} >
        <div className="product_modal">
            <img src={image} className="img_product" alt="" />
            <div className="product_description">
            <p className='txt_categoria' >Categoria: {category}</p>

              <p>{title}</p>

              <p> ${price}</p>

              <p className='txt_categoria'>En stock: {rating.count} </p>

              <p className='txt_categoria'>Envio Express</p>
              <p className='txt_categoria'> {description.slice(0,1).toUpperCase()+description.slice(1,-1)} </p>
              <p>Calificacion: {rating.rate}</p>
              <button className='btn_add_carrito' onClick={addCarrito} >AÑADIR AL CARRITO</button>

            </div>
            
        </div>
          
      </Modal>
    </>
    
  )
}
