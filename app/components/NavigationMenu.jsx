'use client';

import Link from 'next/link';
import mockDataPets from '../data/products';
import { usePathname } from "next/navigation";
import { formatCategoryForURL } from '../utils/routeHelp';

const NavMenu = () => {
    const categories = mockDataPets.filter((product, index, self) => index === self.findIndex((t) => t.category === product.category));
    const pathname = usePathname();

    return (
        <div className='flex items-center bg-grey-light border border-orange-light px-20 py-4 font-bebas text-xl text-orange-light'>
            <h1 className='text-3xl'>Categorías</h1>
            <ul className='flex space-x-4 mx-auto'>
                <li>
                    <Link className=
                        {pathname === '/products'
                            ? 'text-orange-dark underline hover:text-red '
                            : 'text-orange-light'
                        }
                    
                    href='/products'>Todas las categorías</Link>
                </li>
                {categories.map((category) => (
                    <li className={
                        pathname === `/products/${formatCategoryForURL(category.category)}`
                            ? 'text-orange-dark underline hover:text-red '
                            : 'text-orange-light'
                    } key={category.category.toLowerCase()}>
                        <Link href={`/products/${formatCategoryForURL(category.category)}`}>{category.category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavMenu;
