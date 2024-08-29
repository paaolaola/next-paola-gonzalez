import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import Link from 'next/link';
import Image from 'next/image';
import CartWhite from '../../components/icon/icons/cartWhite.svg';

const QuantityCart = ({ products, id }) => {
    const { addToCart } = useCartContext();
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        addToCart({ ...products, id, quantity });
    };
    const singleProduct = products.find((product) => product.id === id);

    const incrementQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
            setQuantity(value);
        }
    };

    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='flex flex-row my-10'>
                    <Button onClick={decrementQuantity} disabled={singleProduct.status !== true}>
                        -
                    </Button>
                    <Input value={quantity} onChange={handleInputChange} className='w-20 text-center mx-2' disabled={singleProduct.status !== true} />
                    <Button onClick={incrementQuantity} disabled={singleProduct.status !== true}>
                        +
                    </Button>
                </div>

                <p className={`text-base ${singleProduct.status === true ? 'text-blue-500' : 'text-gray-500'}`}>
                    {singleProduct.status === true ? 'Disponible' : 'Agotado'}
                </p>

                <p className={`text-base ${singleProduct.status === true ? 'text-blue-500' : 'text-gray-500'}`}>
                    {singleProduct.status === true ? 'Disponible' : 'Agotado'}
                </p>

                <Link href={`/cart`}>
                    <Button className='bg-primary-red flex items-center justify-center w-48 h-14 my-4 mx-10'>
                        <Image onClick={handleAdd} src={CartWhite} alt='Cart' width={30} height={30} className='mr-2' priority />
                        Añadir al carrito
                    </Button>
                </Link>

                <Button className='bg-gray-400 text-grey-light flex items-center justify-center w-48 h-14 my-4 mx-10' variant='disabled'>
                    <Image src={CartWhite} alt='Cart' width={30} height={30} className='mr-2' priority />
                    Agotado
                </Button>
            </div>

            <p>No se encontró el producto.</p>
        </>
    );
};

export default QuantityCart;
