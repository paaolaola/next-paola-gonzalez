import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import styles from '../../styles/styles.module.scss';
import Cart from '../icon/icons/cart.svg';
import Paw from '/public/images/paw.png';
import Search from '../search/SearchProducts';
import '../../styles/styles.module.scss';

const Navbar = () => {
    return (
        <div className={`lg:w-full w-full px-4 lg:px-10 py-4 lg:py-6 ${styles.backgrounds}`}>
            <div className='container m-auto flex flex-row items-center justify-between'>
                <Link href='/'>
                    <div className='flex items-center'>
                        <Image src={Paw} alt='Logo' height={28} width={28} />
                        <h1 className={`ml-2 lg:ml-4 w-72 lg:text-3xl text-2xl font-pacifico ${styles.text}`}>De Gatos y Perros</h1>
                    </div>
                </Link>

                <div className='flex-row items-center hidden lg:block lg:mb-0'>
                    <Search />
                </div>
                <div className='flex flex-row mt-4 lg:mt-0 '>
                    <nav className='flex flex-row lg:flex-row items-center w-full justify-end lg:w-full'>
                        <ul className='flex flex-col lg:flex-row items-center w-full lg:w-auto'>
                            <li className={`text-lg lg:text-xl px-2 lg:px-4 font-bebas ${styles.text} hidden lg:block`}>
                               <Link href='/login'>Iniciar sesión</Link>
                            </li>
                        </ul>
                        <div className='flex justify-end lg:justify-start w-full lg:w-auto'>
                            <Link href='/cart'>
                                <Image src={Cart} height={30} width={30} alt='Carro' className='cursor-pointer lg:mx-0' />
                            </Link>
                        </div>

                        <div className='flex justify-center lg:w-auto'>
                            <Menu />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
