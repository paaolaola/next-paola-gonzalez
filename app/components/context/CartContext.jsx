'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
       console.log(cart);
    }, [cart]);
   

    const addToCart = (item) => {
        setCart( [...cart, item]);
    };
const isInCart = (id) => {
    return cart.some(item => item.id === id);
}

const totalCart = () =>{

return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

const emptyCart = () => {
    setCart([]);
}
    

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                isInCart,
                totalCart,
                emptyCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);