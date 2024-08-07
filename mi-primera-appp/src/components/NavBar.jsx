import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">
        <h2>Tiendita</h2>
        </Link>
        <CartWidget/>

        <Link to='/categoria/FrutosSecos' >Frutas Secas</Link>
        <Link to='/categoria/Semillas'> Semillas </Link>

        
    </nav>
  )
}

export default NavBar