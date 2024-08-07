import Link from 'next/link';
import Image from 'next/image';
import CloseLogo from '../../components/icon/icons/close.svg';

const MenuList = ({ open, handleClose }) => {
    return (
        <div className={`${open ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all fixed inset-0 bg-black/50 flex justify-end`}>
            <aside className={`${!open ? 'translate-x-96' : ''} transition-all w-96 bg-grey-light flex flex-col items-center`}>
                 <div className="w-full flex justify-end">
                    <Image src={CloseLogo} height={26} width={26} alt="Close" onClick={handleClose} className="cursor-pointer m-4" />
                </div>
                <nav className="font-bebas text-xl">
                    <ul className="flex flex-col mx-20 my-10 items-center">
                        <li className='py-8' onClick={handleClose}>
                            <Link className=' text-orange-dark border-b-2 border-primary-red-light pb-2' href="/">
                                Inicio
                            </Link>
                        </li>
                        <li className='py-8' onClick={handleClose}>
                            <Link className='text-orange-dark border-b-2 border-primary-red-light pb-2' href="/about">
                                Nosotros
                            </Link>
                        </li>
                        <li className='py-8' onClick={handleClose}>
                            <Link className="text-orange-dark border-b-2 border-primary-red-light pb-2" href="/contact">
                                Contacto
                            </Link>
                        </li>
                        <li className='py-8' onClick={handleClose}>
                            <Link className='text-orange-dark border-b-2 border-primary-red-light pb-2' href="/login">
                                Iniciar sesión
                            </Link>
                        </li>
                        <li className='py-8' onClick={handleClose}>
                            <Link className='text-orange-dark border-b-2 border-primary-red-light pb-2' href="/admin">
                                Soy admin
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default MenuList;
