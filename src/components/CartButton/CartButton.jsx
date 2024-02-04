import React, { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';

import './CartButton.css';
import AppContext from '../../context/AppContext';
//import AppContext from '../../context/AppContext';

function CartButton() {
  
  const { cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext);
   
  return (
    <button 
      type= "button" 
      className="cart__button"
      onClick={ () => setIsCartVisible (!isCartVisible)}
    >
      <IoCartOutline />
      
      { cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span> }

    </button>
  );
}


export default CartButton;
