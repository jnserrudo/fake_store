import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import { Home } from './components/Home'
import { CartProvider } from './components/contexts/CartContext'

function App() {

  return (
    <div className="App">
      <CartProvider>
        <Home/>
      </CartProvider>
      
    </div>
  )
}

export default App
