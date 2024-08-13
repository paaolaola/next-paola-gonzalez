import Image from 'next/image';
import Link from 'next/link';
import {Button} from '../components/ui/button';

const ProductCard = ({ product }) => {
    const { name, brand, description, price, imageUrl, id } = product;

    return (
        <>
            <div className='bg-white rounded-xl shadow-md overflow-hidden p-2 m-4 hover:shadow-primary-red-light hover:border-orange-light hover:border flex flex-col justify-between'>
                <Link href={`/product/${id}`}>
                <Image src={imageUrl} alt={name} width={150} height={150} className='object-cover mx-auto' />
                </Link>
                <div className='p-4 text-gray-600 flex flex-col justify-around flex-grow'>
                    <h2 className='font-semibold text-base my-2'>{name}</h2>
                    <p className='text-orange-dark font-medium text-sm border-2 border-orange-dark rounded-xl w-fit px-2' >{brand}</p>
                    <p className='text-gray-500 text-sm overflow-hidden text-ellipsis my-4'>{description}</p>
                    <p className='text-primary-red-light font-bold'>${price}</p>
                </div>
                    <div className='flex justify-evenly items-center flex-grow'>
                    <Button 
                        className='bg-primary-red h-10 my-2'
                    >Añadir al carrito</Button>
                    
                    <Link href={`/product/${id}`}>
                    <Button 
                        className= 'text-primary-red-light h-10 my-2' variant='orange'
                    >Ver más</Button>
                    </Link>
                    </div>
            </div>
        </>
    );
};

export default ProductCard;
