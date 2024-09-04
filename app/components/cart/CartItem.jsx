import Image from 'next/image';
import {Button} from '../ui/button';
import {useCartContext} from '../../components/context/CartContext';

const CartItem = ({ product }) => {
    
    const { removeFromCart } = useCartContext();
    const { id, name, brand, price, discount, imageUrl, quantity } = product;
    const total = (price - (price * (discount / 100))) * quantity;
    const handleRemove = () => {
        removeFromCart(id);
    };

    return (
        <li className='flex flex-row items-center justify-between p-4 border-b border-gray-200'>
            <div className='flex flex-row items-center space-x-4'>
                <Image src={imageUrl} alt={name} width={100} height={100} className='object-cover' />
                <div className='flex flex-col items-start'>
                    <h2 className='font-semibold text-lg'>{name}</h2>
                    <p className='text-gray-500 text-sm'>{brand}</p>
                    <p className='text-primary-red-light text-lg font-bold'>${total}</p>
                </div>
            </div>
            <div className='flex flex-col items-end'>
                <p className='text-gray-500 text-sm'>Cantidad: {quantity}</p>
                <Button onClick={handleRemove} className='h-8' variant='orange'>Eliminar</Button>
            </div>
        </li>
    );
}


export default CartItem;