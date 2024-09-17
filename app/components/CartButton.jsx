'use client';

import { useCartContext } from '../components/context/CartContext';
import Image from 'next/image';
import CartWhite from '../components/icon/icons/cartWhite.svg';

const CartButton = ({ product }) => {
    const { addToCart } = useCartContext();

    return (
        <button
            onClick={() => addToCart(product)}
            className='bg-primary-red flex flex-row items-center justify-center w-48 h-14 my-4 mx-2'
        >
            <Image src={CartWhite} alt='Cart' width={30} height={30} className='mr-2' priority />
            Añadir al carrito
        </button>
    );
};

export default CartButton;
