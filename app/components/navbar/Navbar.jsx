import Image from 'next/image'
import  Link from "next/link"
import Menu from './Menu'
import styles from '../../styles/styles.module.scss'
import Cart from '../icon/icons/cart.svg'
import Paw from '/public/images/paw.png'
import Search from '../search/SearchProducts';
import "../../styles/styles.module.scss";



const Navbar = () => {
  return (
    <div className={` w-full px-10 py-6 ${styles.backgrounds}`}>
        <div className=" container m-auto flex flex-row items-center justify-between">
          <Link href="/">
          <div className="flex items-center">
        <Image src={Paw} alt="Logo" height={30} width={30} />
        <h1 className={`ml-4 text-3xl font-pacifico ${styles.text}`}>De Gatos y Perros</h1>
        </div>
        </Link>
        <div className="flex flex-row items-center">
 < Search />
          </div>
        <div className="flex">
        <nav className="flex flex-row items-center">
                <ul className="flex flex-row">
                    <li className={`text-xl px-4 font-bebas ${styles.text}`}>
                        <Link href="/">Iniciar sesión</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex flex-row items-center">
            <Image src={Cart} height={30} width={30} alt="Carro" className='cursor-pointer mr-4'  />
        </div>
        <Menu />
        </div>
        </div>
    </div>
  )
}

export default Navbar