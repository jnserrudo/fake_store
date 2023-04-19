import React, { useContext } from 'react'
import { types } from '../actions/cartAction'
import CartContext from './contexts/CartContext'

export const Prod_cart = ({data}) => {  
  const {isOpen_cart,closeModal_cart,openModal_cart,cart,dispatchCart}=useContext(CartContext)
  const restar=()=>{
    console.log(data)
    data.cant==1?dispatchCart({type:types.remove_all_from_cart,payload:data}):dispatchCart({type:types.remove_one_from_cart,payload:data})
    
  }
  const sumar=()=>dispatchCart({type:types.add_to_cart,payload:data})
  return (
    <div className='prod_cart'>
        <img src={data.image} alt="" className='img_prod_cart' />
        <div className="description_prod_cart">
            <p>{data.title}</p>
            <button onClick={restar} > - </button>
            <button> {data.cant} </button>
            <button onClick={sumar} > + </button>
            <p>Precio ${data.price}</p>
        </div>
        <button  onClick={()=>dispatchCart({type:types.remove_all_from_cart,payload:data})} >Quitar del Carrito</button>
    </div>
  )
}
