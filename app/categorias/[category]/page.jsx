//Código con la mokcData
// 'use client';

// import { useParams } from "next/navigation";
// import mockDataPets from "../../data/products";
// import ProductList from "../../components/ProductList";
// import { parseCategoryFromURL } from "../../utils/routeHelp";
// import BtnRoterBack from "../../components/BtnRoterBack";

// const Category = () => {
//     const { category } = useParams();
//     const decodedCategory = parseCategoryFromURL(decodeURIComponent(category));

//     const filteredProducts = mockDataPets.filter((product) => product.category.toLowerCase() === decodedCategory.toLowerCase());

//     return (
//         <>
//         <div className=" bg-grey-light flex flex-row items-center">
//             <BtnRoterBack />
//             <h1 className="">
//                 Estás viendo la categoría de: <span className="font-extrabold capitalize">{decodedCategory}</span>
//             </h1>
//         </div>
//             <ProductList data={filteredProducts} />
//             </>
//     );
// }

// export default Category;

//Código con la API


import ProductList from "../../components/ProductList";
import { parseCategoryFromURL } from "../../utils/routeHelp";
// import BtnRoterBack from "../../components/BtnRoterBack";
import { Suspense } from "react";
import Image from 'next/image';
import Paw from '/public/images/paw-primary.png';

export function generateStaticParams() {
    return [
        {category: 'alimentos'},
        {category: 'juguetes'},
        {category: 'comodidad'},
        {category: 'salud y bienestar'},
    ]
}
export const revalidate = 3600;

const Category = ({ params }) => {
    const { category } = params;
    const decodedCategory = parseCategoryFromURL(decodeURIComponent(category));
    const filteredProducts = category.filter((product) => product.category.toLowerCase() === decodedCategory.toLowerCase());

    return (
        <>
            <div className=" bg-grey-light flex flex-row items-center">
                {/* <BtnRoterBack /> */}
                <h1 className="">
                    Estás viendo la categoría de: <span className="font-extrabold capitalize">{decodedCategory}</span>
                </h1>
            </div>
            
            <ProductList category={filteredProducts} />
           
        </>
    );
}

export default Category;

