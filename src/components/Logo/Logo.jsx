import React from 'react'
import './Logo.css';
const Logo = () => {
    const imgLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Icon_planet.svg/600px-Icon_planet.svg.png?20230331134536";
    return (
        <img className="logo" src={ imgLogo } alt="Logo" />
    )
}

export default Logo