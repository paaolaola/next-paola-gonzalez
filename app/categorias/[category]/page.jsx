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
import ProductList from '../../components/ProductList';
import { Suspense } from 'react';
import Image from 'next/image';
import Paw from '/public/images/paw-primary.png';


export async function generateMetadata({ params, searchParams }) {
    const category = params.category;
    const categorias = await fetch(`https://degatosyperros.vercel.app/api/categorias/${category}`);
    return {
        title: `Categorías | De Gatos & Perros`,
        description: 'Los mejores productos para tu amigo peludito',
        metadataBase: new URL(`https://degatosyperros.vercel.app/api/categorias/${category}`),
        openGraph: {
            title: `Categorías | De Gatos & Perros`,
            description: 'Los mejores productos para tu amigo peludito',
            url: (`https://degatosyperros.vercel.app/api/categorias/${category}`),
            images: [
                {
                    url: '/paw-primary.png',
                    width: 800,
                    height: 600,
                    alt: 'Patita de gato',
                },
            ],
        },
        twitter: {
            card: '/apple-icon.png',
            site: (`https://degatosyperros.vercel.app/api/categorias/${category}`),
            title: `Categorías | De Gatos & Perros`,
            description: 'Patita de gato',
            images: ['/apple-icon.png'],
        },
    };
}

export function generateStaticParams() {
    return [
        { category: 'Alimentos' },
        { category: 'Juguetes' },
        { category: 'Comodidad' },
        { category: 'Salud y bienestar' },
        { category: 'Accesorios' },
        { category: 'Transporte y seguridad' },
        { category: 'Vestuario' },
        { subcategory: 'Arenas sanitarias' },
        { subcategory: 'Bolsas compostables' },
        { subcategory: 'Alimento para Perros' },
        { subcategory: 'Alimento para Gatos' },
        { subcategory: 'Camas' },
        { subcategory: 'Champú' },
        { subcategory: 'Correas' },
        { subcategory: 'Juguetes interactivos' },
        { subcategory: 'Parkas' },
        { subcategory: 'Platos' },
        { subcategory: 'Transportadores' },
    ];
}
export const revalidate = 3600;

const Category = async ({ params }) => {
    const { category } = params;
    return (
        <>
            <div className=' bg-grey-light flex flex-row items-center p-16'>
                <h1 className=''>
                    Estás viendo la categoría de: <span className='font-extrabold capitalize'>{category}</span>
                </h1>
            </div>
            <Suspense
                fallback={
                    <div className='w-full animate-pulse h-full min-h-screen flex flex-col justify-center items-center'>
                        <Image src={Paw} alt='paw' width={100} height={100} priority />
                        <p className='font-pacifico text-primary-red-light text-xl py-5'>Cargando productos</p>
                    </div>
                }
            >
                <ProductList category={category} />
            </Suspense>
        </>
    );
};

export default Category;
