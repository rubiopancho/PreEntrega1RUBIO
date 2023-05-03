import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://img1.freepng.es/20180329/wrw/kisspng-computer-icons-shopping-cart-retail-clip-art-shopping-cart-5abdaab02b84e4.7920989215223794401783.jpg"
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
        <strong className='number'>16</strong>
    </div>
  )
}

export default CartWidget