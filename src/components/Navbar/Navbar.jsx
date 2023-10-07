import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
const Navbar = () => {
    return (
        <header>
            <Logo/>
            <h1>Tecno Tienda</h1>
            <nav>
                <ul>
                    <li> Productos </li>
                    <li> Usuarios </li>
                    <li> Carrito </li>
                </ul>
            </nav>
            <CartWidget/>
        </header>
    )
}

export default Navbar