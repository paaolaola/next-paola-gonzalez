'use client';

import ProductList from '../components/ProductList';
import mockDataPets from '../data/products';
import BtnRoterBack from '../components/BtnRoterBack';


const Categories = () => {
    return (
        <>
        <BtnRoterBack />
        <h1 className='text-2xl px-6 text-center font-extrabold'>La mejor calidad para tu peludito incondicional 🐈 🐶</h1>
            <ProductList data={mockDataPets} />
        </>
    );
};

export default Categories;
