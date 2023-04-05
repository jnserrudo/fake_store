import React from 'react'
import Button from '@mui/material/Button';
import { ProductList } from './ProductList';

export const Main = () => {
  return (
    <main>
        <div className="ofertas">
            <p>ofertas</p>
        </div>
        <div className="cont_tendencia">
            <p>Tendencia</p>
            <p>Producto</p>
            <Button className='btn_tendencia' variant="outlined">Descrubir</Button>

        </div>
        <ProductList/>
    </main>
  )
}
