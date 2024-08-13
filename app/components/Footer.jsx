import Link from 'next/link';
import Image from 'next/image';
import Paw from '/public/images/paw.png';
import styles from '../styles/styles.module.scss';
import SocialMediaBtn from './SocialMediaBtn';

const Footer = () => {
    return (
        <div className='bg-orange-dark text-grey-light px-10 py-10 sm:px-10 md:px-20 md:py-10'>
            <div className='container mx-auto flex flex-col md:flex-row items-start justify-between'>
                <div className='flex flex-col items-start mb-6 md:mb-0'>
                    <Link href='/'>
                        <div className='flex items-center'>
                            <Image src={Paw} alt='Logo' height={30} width={30} />
                            <h1 className={`ml-2 text-3xl font-pacifico ${styles.text}`}>De Gatos y Perros</h1>
                        </div>
                    </Link>
                    <p className={`mt-4 mb-10 text-sm font-edu ${styles.text}`}>La tienda online para tu peludito incondicional.</p>
                </div>

                <nav className='flex flex-col md:flex-row  md:space-x-10'>
                    <ul className='flex flex-col md:flex-row lg:space-x-10'>
                        <li className={`mb-8 md:mb-0 text-xl md:text-xl ${styles.text}`}>
                            <p className="font-bebas">Inicio</p>
                            <Link href='/' className='text-sm hover:underline'><p className='text-slate-200 font-bebas mt-1'>Novedades</p></Link>
                        </li>
                        <li className={`mb-8 md:mb-0 text-xl md:text-xl ${styles.text}`}>
                            <p className="font-bebas">Productos</p>
                            <Link href='/categories/juguetes' className='text-sm hover:underline'><p className='text-slate-200 font-bebas mt-1'>Juguetes</p></Link>
                            <Link href='/categories/salud-y-bienestar' className='text-sm hover:underline'><p className='text-slate-200 font-bebas mt-1'>Salud y Bienestar</p></Link>
                            <Link href='/categories/comodidad' className='text-sm hover:underline'><p className='text-slate-200 font-bebas mt-1'>Comodidad</p></Link>
                            <Link href='/categories/transporte-y-seguridad' className='text-sm hover:underline'><p className='text-slate-200 font-bebas mt-1'>Transporte y Seguridad</p></Link>
                        </li>
                        <li className={`mb-8 md:mb-0 text-xl md:text-xl ${styles.text}`}>
                            <p className="font-bebas">Alimentos</p>
                            <Link href='/categories/alimentos' className='text-sm hover:underline'><p className='mt-1 font-bebas text-slate-200'>Alimento Light</p></Link>
                            <Link href='/categories/alimentos' className='text-sm hover:underline'><p className='mt-1 font-bebas text-slate-200'>Adulto</p></Link>
                        </li>
                        <li className={`mb-8 md:mb-0 text-xl md:text-xl ${styles.text}`}>
                            <p className="font-bebas">Nosotros</p>
                            <Link href='/about' className='text-sm hover:underline'><p className='mt-1 font-bebas text-slate-200'>Quienes somos</p></Link>
                        </li>
                        <li className='text-start'>
                            <p className="font-bebas mb-2 text-xl md:text-xl">Contacto</p>
                            <SocialMediaBtn/>
                            <Link className='text-sm hover:underline' href='/contact'>
                                <p className='mt-4 font-bebas text-slate-200'>¿Necesitas ayuda?</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
                <p className='text-center text-orange-300 font-bebas mt-20'>De gatos y perros. Todos los derechos reservados ©️. 2024</p>
        </div>
    );
};

export default Footer;
