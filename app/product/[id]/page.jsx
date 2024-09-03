import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

const ProductDetail = async ({ params }) => {
    const { id } = params;
    const product = await fetch(`http://localhost:3000/api/product/${id}`, {
        next: { revalidate: 3600 }
    }).then(res => res.json());

    if (!product) {
        return <p>Producto no encontrado</p>;
    }

    const { name, brand, description, price, discount, status, imageUrl } = product;

    return (
        <div className='bg-white px-4 py-20 hover:shadow-orange-light flex flex-col justify-center items-center lg:flex-row mx-auto border w-fit border-orange-dark rounded-xl my-20'>
            <div>
                {discount > 0 && (
                    <span className='bg-blue-500 text-grey-light font-bebas text-xl absolute z-30 p-2 rounded-full'>
                        -{discount}%
                    </span>
                )}
                <Image src={imageUrl} alt={name} width={300} height={300} className='object-cover mx-auto' priority />
            </div>
            <div className='p-4 text-gray-600 flex flex-col items-start w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
                <h2 className='font-semibold text-3xl my-2'>{name}</h2>
                <p className='text-orange-dark font-medium text-sm border-2 border-orange-dark rounded-xl w-fit px-2'>{brand}</p>
                <p className='text-gray-500 text-base overflow-hidden mx-auto text-ellipsis my-2'>{description}</p>

                {discount > 0 ? (
                    <div className='flex flex-row items-center space-x-4'>
                        <span className='text-primary-red-light text-2xl font-bold'>
                            ${price - (price * (discount / 100))}
                        </span>
                        <p className='text-slate-500 text-md line-through font-medium'>${price}</p>
                    </div>
                ) : (
                    <p className='text-primary-red-light text-2xl font-bold'>${price}</p>
                )}

                <div className='mt-4'>
                    {status === true ? (
                        <>
                            <p className='text-blue-500 text-base mb-4'>Disponible</p>
                            <Link href={`/cart`}>
                                <Button className='bg-primary-red h-10 my-2'>Añadir al carrito</Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <p className='text-gray-500 text-lg mb-4'>Agotado</p>
                            <Button className='bg-gray-400 text-grey-light h-10 my-2' variant='disabled'>
                                Agotado
                            </Button>
                        </>
                    )}
                    <Link href={'/categorias'}>
                        <Button className='text-primary-red-light h-10 my-2 mx-2' variant='orange'>
                            Seguir viendo
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
