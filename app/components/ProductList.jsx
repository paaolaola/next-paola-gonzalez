import React from 'react';
import ProductCard from '../components/ProductCard';


const ALL_PRODUCTS_URL = 'https://degatosyperros.vercel.app/api/categorias/all';
const CATEGORY_URL = (category) => `https://degatosyperros.vercel.app/api/categorias/${category}`;
const SUBCATEGORY_URL = (category, subcategory) => `https://degatosyperros.vercel.app/api/categorias/${category}/${subcategory}`;


const fetchProducts = async (categories, category, subcategory) => {
    let apiUrl;

    if (categories === 'all') {
        apiUrl = ALL_PRODUCTS_URL;
    } else if (category && subcategory) {
        apiUrl = SUBCATEGORY_URL(category, subcategory);
    } else if (category) {
        apiUrl = CATEGORY_URL(category);
    } else {
        apiUrl = ALL_PRODUCTS_URL; 
    }

    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return await response.json();
};

const ProductList = async ({ categories = 'all', category, subcategory }) => {
    try {
        const items = await fetchProducts(categories, category, subcategory);

        return (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-8 bg-grey-light'>
                {items.map(item => (
                    <ProductCard key={item.id} {...item} />
                ))}
            </div>
        );
    } catch (error) {
        console.error('Error fetching products:', error);
        return <div>Error cargando los productos</div>;
    }
};

export default ProductList;
