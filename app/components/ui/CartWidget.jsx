'use client';

import Link from 'next/link';
import Cart from '../icon/icons/cart.svg';
import Image from 'next/image';
import { useCartContext } from '../../components/context/CartContext';

const CartWidget = () => {
    const { totalCart } = useCartContext();

    return (
        <Link href={`/cart`}>
            <div className='flex items-center justify-center cursor-pointer'>
                <Image src={Cart} height={30} width={30} alt='Carro' className='cursor-pointer lg:mx-0' />
                <span className='bg-primary-red text-white font-semibold text-sm rounded-full px-2 py-1 ml-2'>{totalCart()}</span>
            </div>
        </Link>
    );
};

export default CartWidget;
