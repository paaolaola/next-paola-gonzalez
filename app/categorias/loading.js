import Image from 'next/image';
import Paw from '/public/images/paw-primary.png';

const Loading = () => {
    return (
        <div className='w-full animate-pulse h-full min-h-screen flex flex-col justify-center items-center'>
            <Image src={Paw} alt='paw' width={100} height={100} priority/>
            <p className='font-pacifico text-primary-red-light text-xl py-5'>Cargando productos</p>
        </div>
    );
};

export default Loading;
