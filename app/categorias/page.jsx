//Código con la mockData
// 'use client';

// import ProductList from '../components/ProductList';
// import mockDataPets from '../data/products';
// import BtnRoterBack from '../components/BtnRoterBack';

// const Categories = () => {
//     return (
//         <>
//         <BtnRoterBack />
//         <h1 className='text-2xl px-6 text-center font-extrabold'>La mejor calidad para tu peludito incondicional 🐈 🐶</h1>
//             <ProductList data={mockDataPets} />
//         </>
//     );
// };

// export default Categories;

//Código con la API

import ProductList from '../components/ProductList';
import { Suspense } from 'react';
import Image from 'next/image';
import Paw from '/public/images/paw-primary.png';

const Categories = async ({ categories = 'all' }) => {
    return (
        <>
            <h1 className='text-2xl p-16 text-center font-extrabold'>La mejor calidad para tu peludito incondicional 🐈 🐶</h1>
            <Suspense
                fallback={
                    <div className='w-full animate-pulse h-full min-h-screen flex flex-col justify-center items-center'>
                        <Image src={Paw} alt='paw' width={100} height={100} priority />
                        <p className='font-pacifico text-primary-red-light text-xl py-5'>Cargando productos</p>
                    </div>
                }
            >
                <ProductList categories={categories} />
            </Suspense>
        </>
    );
};

export default Categories;
