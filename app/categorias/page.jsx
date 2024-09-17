import ProductList from '../components/ProductList';
import { Suspense } from 'react';
import Image from 'next/image';
import Paw from '/public/images/paw-primary.png';

export async function generateMetadata({ params, searchParams }) {
    const categorias = params.categorias;
    const products = await fetch(`http://localhost:3000/api/${categorias}`);
    return {
        title: `Todas las categorías | De Gatos & Perros`,
        description: 'Los mejores productos para tu amigo peludito',
        url: products,
        openGraph: {
            images: ['/public/images/paw-primary.png'],
        },
    };
}

const Categories = async ({ params }) => {
    const { categorias } = params;

    return (
        <>
            <h1 className='text-2xl p-16 text-center font-extrabold'>La mejor calidad para tu peludito incondicional 🐈 🐶</h1>
            <Suspense
                fallback={
                    <div className='w-full animate-pulse h-full min-h-screen flex flex-col justify-center items-center'>
                        <Image src={Paw} alt='paw' blurDataURL='Cargando:...' placeholder='blur' width={100} height={100} priority />
                        <p className='font-pacifico text-primary-red-light text-xl py-5'>Cargando productos</p>
                    </div>
                }
            >
                <ProductList categories={categorias} />
            </Suspense>
        </>
    );
};

export default Categories;
