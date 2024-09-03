import React from 'react';
import ProductCard from '../components/ProductCard';


const ProductList = async () => {
    const items = await fetch('http://localhost:3000/api/categorias/all',

        
    ).then(res => res.json());
    
    console.log(items); 
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-8 bg-grey-light'>
            {items.map(item => (
                <ProductCard key={item.id} {...item} />
            ))}
        </div>
    );
    

};

export default ProductList;
