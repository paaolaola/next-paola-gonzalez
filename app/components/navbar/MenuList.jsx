import Link from 'next/link';
import Image from 'next/image';
import CloseLogo from '../../components/icon/icons/close.svg';
import Search from '../../components/search/SearchProducts';
import { Button } from '../ui/button';
import { PawPrint } from 'lucide-react';
import { Cat } from 'lucide-react';
import { Dog } from 'lucide-react';
import { Lock } from 'lucide-react';
import  NavigationMenu  from '../NavigationMenu';

const MenuList = ({ open, handleClose }) => {
    return (
        <div className={`${open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all fixed inset-0 bg-black/50 flex z-50 justify-end`}>
            <aside className={`${!open ? 'translate-x-96' : ''} transition-all w-96 bg-grey-light flex flex-col items-center`}>
                <div className='bg-orange-light w-full flex justify-end'>
                    <Image src={CloseLogo} height={26} width={26} alt='Close' onClick={handleClose} className='cursor-pointer m-4' />
                </div>
                <div className='bg-orange-light visible lg:hidden p-4 w-full'>
                    <Search />
                </div>
                {/* <NavigationMenu /> */}
                <nav className='font-bebas text-xl'>
                    <ul className='flex flex-col mx-20 my-10 items-center'>
                    <li className='py-8' onClick={handleClose}>
  <Link className='text-primary-red hover:text-orange-light pb-2 flex justify-start items-center w-32' href='/'>
    <span className='flex justify-start items-center mr-8'>
      <PawPrint className='w-6 h-6' />
    </span>
    Inicio
  </Link>
</li>
<li className='py-8' onClick={handleClose}>
  <Link className='text-primary-red hover:text-orange-light pb-2 flex justify-start items-center w-32' href='/about'>
    <span className='flex justify-start items-center mr-8'>
      <Cat className='w-6 h-6' />
    </span>
    Nosotros
  </Link>
</li>
<li className='py-8' onClick={handleClose}>
  <Link className='text-primary-red hover:text-orange-light pb-2 flex justify-start items-center w-32' href='/contact'>
    <span className='flex justify-start items-center mr-8'>
      <Dog className='w-6 h-6' />
    </span>
    Contacto
  </Link>
</li>
<li className='py-8' onClick={handleClose}>
  <Link className='text-primary-red hover:text-orange-light pb-2 flex justify-start items-center w-32' href='/admin'>
    <span className='flex justify-start items-center mr-8'>
      <Lock className='w-6 h-6' />
    </span>
    Soy admin
  </Link>
</li>


                        <li className='py-8' onClick={handleClose}>
                            <Button variant='default' color='primary' className='w-full h-10'>
                                <Link className='text-grey-light' href='/login'>
                                    Iniciar sesión
                                </Link>
                            </Button>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default MenuList;
