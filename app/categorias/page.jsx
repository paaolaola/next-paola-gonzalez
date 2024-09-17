import ProductList from '../components/ProductList';
import { Suspense } from 'react';
import Image from 'next/image';
import Paw from '/public/images/paw-primary.png';

export const generateMetadata = () => {
    return {
        title: `Todas las categorías | De Gatos & Perros`,
        description: 'Los mejores productos para tu amigo peludito',
        metadataBase: new URL('https://degatosyperros.vercel.app/categorias'),
        openGraph: {
            title: `Todas las categorías | De Gatos & Perros`,
            description: 'Los mejores productos para tu amigo peludito',
            url: 'https://degatosyperros.vercel.app/categorias/all/',
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
            site: 'https://degatosyperros.vercel.app/categorias/all/',
            title: `Todas las categorías | De Gatos & Perros`,
            description: 'Patita de gato',
            images: ['/apple-icon.png'],
        },
    };
};

const Categorias = async ({ params }) => {
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
                <ProductList categorias={categorias} />
            </Suspense>
        </>
    );
};

export default Categorias;
