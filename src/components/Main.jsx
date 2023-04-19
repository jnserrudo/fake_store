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
            <img className='img_tendencia' src="./src/assets/tendencia.webp" alt="as" />
            <div className="items_tendencia">
              <p>Tendencia</p>
              <p>Producto</p>
              <Button className='btn_tendencia' variant="outlined">Descubrir</Button>

            </div>
            
        </div>
        <ProductList/>
    </main>
  )
}
