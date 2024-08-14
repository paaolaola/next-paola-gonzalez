'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import mockDataPets from '../../data/products';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import CartWhite from '../../components/icon/icons/cartWhite.svg';
import { Input } from '../../components/ui/input';
import BtnRoterBack from '../../components/BtnRoterBack';

const ProductDetail = () => {
    const { id } = useParams();
    const singleProduct = mockDataPets.find((product) => product.id == id);
    const [quantity, setQuantity] = useState(0);

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        setQuantity(value);
    };

    return (
        <>
            <BtnRoterBack />
            <div className='bg-white px-4 py-20 hover:shadow-orange-light flex flex-col justify-center items-center lg:flex-row mx-auto border w-fit border-orange-dark rounded-xl my-20'>
                <div>
                    {singleProduct.discount > 0 && (
                        <span className='bg-blue-500  text-grey-light font-bebas text-xl absolute z-30 p-2 rounded-full'>-{singleProduct.discount}%</span>
                    )}
                    <Image src={singleProduct.imageUrl} alt={singleProduct.name} width={500} height={500} className='mx-auto' />
                </div>
                <div className='p-4 text-gray-600 flex flex-col items-start w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
                    <h2 className='font-semibold text-3xl my-2'>{singleProduct.name}</h2>
                    <p className='text-orange-dark font-medium text-sm border-2 border-orange-dark rounded-xl w-fit px-2'>{singleProduct.brand}</p>
                    <p className='text-gray-500 text-base overflow-hidden mx-auto text-ellipsis my-2'>{singleProduct.description}</p>

                    {singleProduct.discount > 0 ? (
                        <div className='flex flex-row items-center space-x-4'>
                            <span className='text-primary-red-light text-2xl font-bold'>
                                ${singleProduct.price - singleProduct.price * (singleProduct.discount / 100)}
                            </span>
                            <p className='text-slate-500 text-md line-through font-medium'>${singleProduct.price}</p>
                        </div>
                    ) : (
                        <p className='text-primary-red-light text-2xl font-bold'>${singleProduct.price}</p>
                    )}

                    {singleProduct.status === true ? (
                        <div className='flex flex-row items-center'>
                            <div className='flex flex-row my-10'>
                                <Button onClick={decrementQuantity}>-</Button>
                                <Input value={quantity} onChange={handleInputChange} className='w-20 text-center mx-2' />
                                <Button onClick={incrementQuantity}>+</Button>
                            </div>
                        </div>
                    ) : (
                        <div className='flex flex-row items-center'>
                            <div className='flex flex-row my-10'>
                                <Button disabled variant='disabled' onClick={decrementQuantity}>
                                    -
                                </Button>
                                <Input disabled value={quantity} onChange={handleInputChange} className='w-20 text-center mx-2' />
                                <Button disabled variant='disabled' onClick={incrementQuantity}>
                                    +
                                </Button>
                            </div>
                        </div>
                    )}
                    {singleProduct.discount > 0 ? (
                        <>
                            <p className='text-slate-500'>{singleProduct.status === true ? 'Disponible' : 'Agotado'}</p>
                        </>
                    ) : (
                        <>
                            
                            <p className='text-slate-500'>{singleProduct.status === true ? 'Disponible' : 'Agotado'}</p>
                        </>
                    )}
                    {singleProduct.status === true ? (
                        <Link href={`/cart`}>
                            <Button className='bg-primary-red flex items-center justify-center w-48 h-14 my-4 mx-10'>
                                <Image src={CartWhite} alt='Cart' width={30} height={30} className='mr-2' />
                                {singleProduct.status === true ? 'Añadir al carrito' : 'Agotado'}
                            </Button>
                        </Link>
                    ) : (
                        <Button className='bg-gray-400 text-grey-light flex items-center justify-center w-48 h-14 my-4 mx-10' variant='disabled'>
                            <Image src={CartWhite} alt='Cart' width={30} height={30} className='mr-2' />
                            Agotado
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
