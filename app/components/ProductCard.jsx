'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../components/ui/button';
import { useCartContext } from '../components/context/CartContext';


const ProductCard = ({ id, name, brand, description, price, discount, status, imageUrl }) => {
     const { addToCart } = useCartContext();
    return (
        <>
            <div className='bg-white rounded-xl shadow-md overflow-hidden p-2 m-4 hover:shadow-primary-red-light hover:border-orange-light hover:border flex flex-col justify-between'>
                <Link href={`/product/${id}`}>
                    {discount > 0 && <span className='bg-blue-500 absolute z-30 text-grey-light font-bebas text-xl p-2 rounded-full'>-{discount}%</span>}
                    <Image src={imageUrl} alt={name} width={150} height={150} className='object-cover mx-auto' priority />
                </Link>
                <div className='p-4 text-gray-600 flex flex-col justify-around flex-grow'>
                    <h2 className='font-semibold text-base my-2'>{name}</h2>
                    <p className='text-orange-dark font-medium text-sm border-2 border-orange-dark rounded-xl w-fit px-2'>{brand}</p>
                    <p className='text-gray-500 text-sm overflow-hidden text-ellipsis my-4'>{description}</p>

                    {discount > 0 ? (
                        <>
                            <div className='flex flex-row items-center space-x-2'>
                                <span className='text-primary-red-light text-lg font-bold'>${price - price * (discount / 100)}</span>
                                <p className='text-slate-500 text-md line-through font-medium'>${price}</p>
                            </div>
                            {status === true ? <p className='text-blue-500 text-sm'>Disponible</p> : <p className='text-gray-500 text-sm'>Agotado</p>}
                        </>
                    ) : (
                        <>
                            <p className='text-primary-red-light text-lg font-bold'>${price}</p>
                            {status === true ? <p className='text-blue-500 text-sm'>Disponible</p> : <p className='text-gray-500 text-sm'>Agotado</p>}
                        </>
                    )}
                </div>

                <div className='flex justify-evenly items-center flex-grow'>
                    {status === true ? (
                        <Link href={'/cart'}>
                            <Button onClick={addToCart}  className='bg-primary-red h-10 my-2'>Añadir al carrito</Button>
                        </Link>
                    ) : (
                        <Button className='bg-gray-400 text-grey-light h-10 my-2' variant='disabled'>
                            Agotado
                        </Button>
                    )}
                    <Link href={`/product/${id}`}>
                        <Button className='text-primary-red-light h-10 my-2' variant='orange'>
                            Ver más
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
