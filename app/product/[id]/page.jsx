'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import BtnRoterBack from '../../components/BtnRoterBack';


const getProducts = async (id
    
) => {
    const response = await fetch(`/api/product/${id}`, {
        cache: 'default',
        next: {
            revalidate: 3600,
        },
    });
    const products = await response.json();
    return products;
};
const ProductDetail = () => {
    const [products, setProducts] = useState([]);

    const singleProduct = products.find((product) => product.id == id);

    useEffect(() => {
        const fetchProducts = async (id) => {
            try {
                if (id) {
                    const products = await getProducts(id);
                    setProducts(products);
                }
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);


    return (
        <>
            <BtnRoterBack />
            <div className='bg-white px-4 py-20 hover:shadow-orange-light flex flex-col justify-center items-center lg:flex-row mx-auto border w-fit border-orange-dark rounded-xl my-20'>
                <div>
                    {singleProduct && singleProduct.discount > 0 && (
                        <span className='bg-blue-500  text-grey-light font-bebas text-xl absolute z-30 p-2 rounded-full'>-{singleProduct.discount}%</span>
                    )}
<Image src={singleProduct.imageUrl} alt={singleProduct.name} width={300} height={300} className='object-cover mx-auto' priority />
                </div>
                <div className='p-4 text-gray-600 flex flex-col items-start w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
                    <h2 className='font-semibold text-3xl my-2'>{singleProduct && singleProduct.name}</h2>
                    <p className='text-orange-dark font-medium text-sm border-2 border-orange-dark rounded-xl w-fit px-2'>{singleProduct && singleProduct.brand}</p>
                    <p className='text-gray-500 text-base overflow-hidden mx-auto text-ellipsis my-2'>{singleProduct && singleProduct.description}</p>

                    {singleProduct && singleProduct.discount > 0 ? (
                        <div className='flex flex-row items-center space-x-4'>
                            <span className='text-primary-red-light text-2xl font-bold'>
                                ${singleProduct && singleProduct.price - singleProduct && singleProduct.price * (singleProduct.discount / 100)}
                            </span>
                            <p className='text-slate-500 text-md line-through font-medium'>${singleProduct.price}</p>
                        </div>
                    ) : (
                        <p className='text-primary-red-light text-2xl font-bold'>${singleProduct && singleProduct.price}</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
