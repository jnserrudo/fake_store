import React from 'react'
import '../components/Modal.css';

export const Modal = ({children,isOpen,closeModal}) => {
  //para que al presionar fuera del modal, es decir sobre la sombrita, tambien se cierre el modal, aplicaremos la funcion closemodal para el evento article tambien, pero como el article contiene al modal, hay que trabajar para que el evento no se active cuando se presione dentro del modal

  const handleModalContainerClick=(e)=>e.stopPropagation()//detiene la propagacion porque sino tambien se cerrara si toco el el modal visible
    return (
    <>
    <article onClick={closeModal} className={ `modalgod ${isOpen&&'is-open'}` } >
        <div className='modal-container' onClick={handleModalContainerClick} > 
            <button onClick={closeModal} className='modal-close' > X </button>
            {children}

        </div>
    </article>
    </>
    
  )
}
