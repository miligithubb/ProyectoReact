import React from 'react';
import CartWidget from './CartWidget';
import './Navbar.css'; 
import { Link } from 'react-router-dom';


export const Navbar = ({ titulo }) => {
  const handleCartClick = () => {
    alert("Hiciste click al carrito");
  };

  return (
    <nav className="NavBar">
      <Link to="/">
        <h2>Dietetica Isabelles</h2>
      </Link>

    
      <Link to="/categoria/FrutosSecos">Frutas Secas</Link>
      <Link to="/categoria/Semillas">Semillas</Link>
      
    
      <CartWidget funcion={handleCartClick} />
    </nav>
  );
};

export default Navbar;
