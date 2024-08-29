'use client';

import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart( [...cart, product]);
    };
const isInCart = (id) => {
    return cart.some(product => product.id === id);
}

const totalCart = () =>{

return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
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
