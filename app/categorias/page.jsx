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
'use client';

import ProductList from '../components/ProductList';
import BtnRoterBack from '../components/BtnRoterBack';
import { useEffect, useState } from 'react';


const getProducts = async () => {
    const response = await fetch('/api/categorias/all',
        {cache:'default',
        next:{
            revalidate:3600
        }},
    );
    
    const products = await response.json();
    return products;

}

const Categories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                setProducts(products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <BtnRoterBack />
            <h1 className='text-2xl px-6 text-center font-extrabold'>La mejor calidad para tu peludito incondicional 🐈 🐶</h1>
            <ProductList data={products} />
            
        </>
    );
};

export default Categories;