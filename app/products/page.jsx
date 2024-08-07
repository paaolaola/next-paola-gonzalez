'use client';

import ProductList from '../components/ProductList';
import mockDataPets from '../data/products';
import BtnRoterBack from '../components/BtnRoterBack';


const Products = () => {
    return (
        <>
        <BtnRoterBack />
            <ProductList data={mockDataPets} />
        </>
    );
};

export default Products;
