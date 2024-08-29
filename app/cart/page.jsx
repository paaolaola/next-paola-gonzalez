'use client';
import { useCartContext } from '../components/context/CartContext';
import CartItem from '../components/cart/CartItem';
import BtnRoterBack from '../components/BtnRoterBack';
import CartIcon from '../components/icon/icons/cart.svg';
import Image from 'next/image';

const Cart = () => {
    const { cart } = useCartContext();

    return (
        <>
        <BtnRoterBack />
            <h1 className='text-2xl px-6 text-center font-extrabold'>Aquí tienes la compra para tu amigo peludito 🐈 🐶</h1>

            <main className='flex flex-col max-w-lg  mx-auto min-h-60 bg-white shadow-md rounded-xl m-20 justify-center items-center'>
                {cart.length === 0 ? (
                    <>
                    <Image src={CartIcon} height={40} width={40} alt='Carro' className='cursor-pointer lg:mx-0' />
                    <p className='text-primary-red-light text-xl font-bebas py-5'>Miau... el carrito está vacío </p>
                    </>
                ) : (
                    <ul>
                        {cart.map((product) => (
                            <CartItem key={product.id} product={product} />
                        ))}
                    </ul>
                )}
            </main>
        </>
    );
};

export default Cart;
