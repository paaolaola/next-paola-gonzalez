import Link from 'next/link';
import Image from 'next/image';
import Paw from '/public/images/paw.png';
import styles from '../styles/styles.module.scss';
import SocialMediaBtn from './SocialMediaBtn';

const Footer = () => {
    return (
        <div className='flex items-start justify-between px-20 pt-20 bg-orange-dark text-grey-light h-[40vh]'>
            <div className='flex items-start flex-col justify-center'>
                <Link href='/'>
                    <div className='flex items-center'>
                        <Image src={Paw} alt='Logo' height={30} width={30} />
                        <h1 className={`ml-4 text-2xl font-pacifico ${styles.text}`}>De Gatos y Perros</h1>
                    </div>
                </Link>
                <p className={`font-edu text-sm mt-4 mb-10 text-slate-200 ${styles.text}`}>La tienda online para tu peludito incondicional.</p>
            </div>
            <nav className='flex flex-row'>
                <ul className='flex flex-row'>
                    <li className={`px-10 text-xl flex flex-col  ${styles.text}`}>
                        <p className="font-bebas" href='/'>Inicio</p>
                        <Link href='/' className='text-sm hover:underline'><p className='text-slate-200 font-bebas mt-2'>Novedades</p></Link>
                    </li>
                    <li className={`px-10 text-xl flex flex-col  ${styles.text}`}>
                        <p className="font-bebas" >Productos</p>
                        
        
                        <Link href='/products/accesorios' className='text-sm hover:underline'><p className='text-slate-200 font-bebas mt-2'>Accesorios</p></Link>
                        <Link href='/products/salud-y-bienestar' className='text-sm hover:underline'><p className='text-slate-200 font-bebas mt-2'>Salud y Bienestar</p></Link>
                        <Link href='/products/juguetes' className='text-sm hover:underline'><p className='text-slate-200 font-bebas mt-2'>Juguetes</p></Link>
                    </li>
                    <li className={`px-10 text-xl flex flex-col  ${styles.text}`}>
                        <p className="font-bebas"  href='/products/alimento'>Alimentos</p>
                        <Link href='/products/alimentos' className='text-sm hover:underline'><p className='mt-2 font-bebas text-slate-200'>Alimento Light</p></Link>
                            <Link href='/products/alimentos' className='text-sm hover:underline'><p className='mt-2 font-bebas text-slate-200'>Adulto</p></Link>
                    </li>
                    <li className={`px-10 text-xl flex flex-col ${styles.text}`}>
                        <p className="font-bebas">Nosotros</p>
                        <Link href='/about' className='text-sm hover:underline'><p className='mt-2 font-bebas text-slate-200'>Quienes somos</p></Link>
                    </li>
                    <li className={`px-10 text-xl text-center ${styles.text}`}>
                        <p className="font-bebas mb-4" >Contacto</p>
                        <SocialMediaBtn />
                        <Link className='text-sm hover:underline' href='/contact'><p className='mt-4 font-bebas text-slate-200'>¿Necesitas ayuda?</p></Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Footer;
