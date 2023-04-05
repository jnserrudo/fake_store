import React from 'react'

export const Product = ({data}) => {
    const { category,description,id,image,price,rating,title}=data
  return (
    <div className='product'>
        <img src={image} className="img_product" alt="" />
        <p>{title}</p>
        <p className='txt_categoria' >{category}</p>
        <p> ${price}</p>
    </div>
  )
}
