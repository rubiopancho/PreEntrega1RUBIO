import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


const NavBar = () => {
  return (
    <header>
        <div className='titulo'>
            <h1 className='titulo1'>Tanbonel</h1>
            <h4>Tienda online</h4>
        </div>
       
        <nav>
            <ul>
                <li>Carteras</li>
                <li>Mantas</li>
                <li>Alfombras</li>
                <li>Bufandas</li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar