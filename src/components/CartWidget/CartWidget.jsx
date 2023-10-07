import React from 'react'
import './CartWidget.css'

const CartWidget = () => {

    const imagenCarrito = "https://e7.pngegg.com/pngimages/833/426/png-clipart-shopping-cart-icon-shopping-cart-black-design.png";

    return (
        <div>
            <img className='imagenCarrito' src={ imagenCarrito } alt="Imagen de carrito de compras"/>
            <strong> 5 </strong>
        </div>
    )
}

export default CartWidget