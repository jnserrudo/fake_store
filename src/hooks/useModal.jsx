import React, { useState } from 'react'

export const useModal = (open) => {
    const [isOpen, setIsOpen] = useState(open)
    const closeModal=()=>{
        console.log('se cerro')    
        setIsOpen(false)
    }
    const openModal=()=>setIsOpen(true)
    
    return[
        isOpen,closeModal,openModal
    ]  

  
}
