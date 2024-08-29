//Código con la mockData
// 'use client';

// import { useParams } from "next/navigation";
// import mockDataPets from "../../../data/products";
// import ProductList from "../../../components/ProductList";
// import { parseSubCategoryFromURL } from "../../../utils/routeHelp";
// import BtnRoterBack from "../../../components/BtnRoterBack";

// const SubCategory = () => {
//     const { subcategory } = useParams();
//     const decodedSubCategory = parseSubCategoryFromURL(decodeURIComponent(subcategory));

//     const filteredProducts = mockDataPets.filter((product) => product.subcategory.toLowerCase() === decodedSubCategory.toLowerCase());

//     return (
//         <>
//         <div className=" bg-grey-light flex flex-row items-center">
//             <BtnRoterBack />
//             <h1 className="">
//                 Estás viendo la subcategoría de: <span className="font-extrabold capitalize">{decodedSubCategory}</span>
//             </h1>
//         </div>
//             <ProductList data={filteredProducts} />
//             </>
//     );
// }

// export default SubCategory;

//Código con la API
'use client';

import ProductList from "../../../components/ProductList";
import { parseSubCategoryFromURL } from "../../../utils/routeHelp";
import BtnRoterBack from "../../../components/BtnRoterBack";
import { useEffect, useState, Suspense } from "react";
import Image from 'next/image';
import Paw from '/public/images/paw-primary.png';

const getProducts = async (category, subcategory) => {
    const response = await fetch(`/api/categorias/${category}/${subcategory}`,
        {cache: 'force-cache',
        next:{
            revalidate:3600
        }}, 
    );
    const products = await response.json();
    return products;
}

const SubCategory = ({ params }) => {
    const { category, subcategory } = params; 
    const decodedSubCategory = parseSubCategoryFromURL(decodeURIComponent(subcategory));
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts(category, decodedSubCategory); 
                const filtered = products.filter((product) => {
                    console.log('Comparing:', product.subcategory.toLowerCase(), 'with', decodedSubCategory.toLowerCase());
                    return product.subcategory.toLowerCase() === decodedSubCategory.toLowerCase();
                });
                setFilteredProducts(filtered);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
    
        fetchProducts();
    }, [category, decodedSubCategory]);

    return (
        <>
            <div className="bg-grey-light flex flex-row items-center">
                <BtnRoterBack />
                <h1 className="">
                    Estás viendo la subcategoría de: <span className="font-extrabold capitalize">{decodedSubCategory}</span>
                </h1>
            </div>
            <Suspense fallback={
                <div className='w-full animate-pulse h-full min-h-screen flex flex-col justify-center items-center'>
            <Image src={Paw} alt='paw' width={100} height={100} priority/>
            <p className='font-pacifico text-primary-red-light text-xl py-5'>Cargando productos</p>
        </div>
            }>
            <ProductList data={filteredProducts} />
            </Suspense>
        </>
    );
}

export default SubCategory;


