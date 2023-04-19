import React from 'react'
import { Modal } from './Modal'
import '../components/Modal.css';
import { useModal } from '../hooks/useModal';

export const Modals = () => {
    //se define cada terna para manejar los distintos modales
    const[isOpenModal1,openModal1,closeModal1]=useModal(false)
    const[isOpenModal2,openModal2,closeModal2]=useModal(false)


  return (
    <div>
        <h2>Modales</h2>
        <button onClick={openModal1} >Modal 1</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
            <h3>Con prop children</h3>
            <p>Modal 1</p>
            <img src='https://placeimg.com/200/200/animals' alt='animales' />

        </Modal>
        <button onClick={openModal2} >Modal 2</button>
        <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
            <h3>Con prop children</h3>
            <p>Modal 2</p>
            <img src='https://placeimg.com/400/400/nature' alt='naturaleza' />

        </Modal>
        {/* <Modal>
            <h3>Con prop children</h3>
            <p>Modal 2</p>
            <img src='https://placeimg.com/400/400/animals' alt='animales' />

        </Modal>
        <Modal>
            <h3>Con prop children</h3>
            <p>Modal 3</p>
            <img src='https://placeimg.com/400/400/animals' alt='animales' />

        </Modal>
        <Modal>
            <h3>Con prop children</h3>
            <p>Modal 4</p>
            <img src='https://placeimg.com/400/400/animals' alt='animales' />

        </Modal> */}
    </div>
  )
}
