'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import mockDataPets from '../../data/products';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import CartWhite from '../../components/icon/icons/cartWhite.svg';
import { Input } from '../../components/ui/input';

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
            <div className='bg-white rounded-xl shadow-md overflow-hidden px-4 py-20 hover:shadow-orange-light hover:border-orange-dark hover:border flex flex-row mx-auto items-center justify-center'>
                <div>
                    <Image src={singleProduct.imageUrl} alt={singleProduct.name} width={500} height={500} className='mx-auto' />
                </div>
                <div className='p-4 text-gray-600 flex flex-col items-start'>
                    <h2 className='font-semibold text-3xl my-2'>{singleProduct.name}</h2>
                    <p className='text-orange-dark text-sm'>{singleProduct.category}</p>
                    <p className='text-gray-500 text-base overflow-hidden text-ellipsis my-2'>{singleProduct.description}</p>
                    <p className='text-primary-red-light font-bold my-2 text-2xl'>${singleProduct.price}</p>
                    <div className='flex flex-row items-center '>
                    <div className='flex flex-row my-10'>
                        <Button onClick={incrementQuantity}>+</Button>

                        <Input value={quantity} onChange={handleInputChange} className="w-20 text-center mx-2"/>

                        <Button onClick={decrementQuantity}>-</Button>
                    </div>
                    <div>
                    <Link href={`/cart`}>
                        <Button className='bg-primary-red flex items-center justify-center w-48 h-14 my-4 mx-10'>
                            <Image src={CartWhite} alt='Cart' width={30} height={30} className='mr-2' />
                            <p className='text-base text-grey-light'>Añadir al carrito</p>
                        </Button>
                    </Link>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
