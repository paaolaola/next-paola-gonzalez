'use client';

import Link from 'next/link';
import mockDataPets from '../data/products';
import { usePathname } from 'next/navigation';
import { formatCategoryForURL } from '../utils/routeHelp';

const NavMenu = () => {
    const categories = mockDataPets.filter((product, index, self) => index === self.findIndex((t) => t.category === product.category));
    const pathname = usePathname();

    return (
        <div className='bg-grey-light border border-orange-light px-4 py-4 md:px-20 md:py-4 font-bebas text-base md:text-xl text-orange-light'>
            <div className='container mx-auto flex flex-row md:flex-row items-center justify-between'>
                <h1 className="text-xl md:text-3xl hidden sm:block lg:block">Categorías</h1>
                <ul className='flex flex-row md:flex-row space-x-2 lg:space-x-6 items-center mx-auto lg:text-xl text-sm'>
                    <li className='mb-2 md:mb-0'>
                        <Link className={
                            pathname === '/products'
                                ? 'text-orange-dark underline hover:text-red'
                                : 'text-orange-light'
                        } href='/products'>
                            Todas las categorías
                        </Link>
                    </li>
                    {categories.map((category) => (
                        <li className='mb-2  md:mb-0' key={category.category.toLowerCase()}>
                            <Link className={
                                pathname === `/products/${formatCategoryForURL(category.category)}`
                                    ? 'text-orange-dark underline hover:text-red'
                                    : 'text-orange-light'
                            } href={`/products/${formatCategoryForURL(category.category)}`}>
                                {category.category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavMenu;
