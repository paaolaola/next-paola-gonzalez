'use client';

import Link from 'next/link';
import mockDataPets from '../data/products';
import { usePathname } from 'next/navigation';
import { formatCategoryForURL } from '../utils/routeHelp';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '../components/ui/navigation-menu';

const NavMenu = () => {
    const categories = mockDataPets.filter((product, index, self) => index === self.findIndex((t) => t.category === product.category));
    const pathname = usePathname();

    const subcategories = mockDataPets.filter((product, index, self) => index === self.findIndex((t) => t.subcategory === product.subcategory));

    return (
        <div className='bg-grey-light border border-orange-light px-4 py-4 md:px-6 md:py-6 font-bebas text-base md:text-xl z-40 text-blue-400'>
            <div className='flex flex-col md:flex-row items-center justify-between'>
                <h1 className='text-xl md:text-2xl lg:text-3xl hover:text-blue-500 mb-4 md:mb-0'>
                    <Link href='/categories'>Ver todas las categorías</Link>
                </h1>
                <ul className='flex flex-col md:flex-row md:space-x-4 lg:text-xl text-sm w-full md:w-auto'>
                    {categories.map((category) => (
                        <NavigationMenu key={category.category.toLowerCase()} className='w-full'>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link href={`/categories/${formatCategoryForURL(category.category)}`} legacyBehavior passHref>
                                        <NavigationMenuTrigger
                                            className={`text-xl font-bebas text-orange-light hover:text-orange-dark ${
                                                pathname === `/categories/${formatCategoryForURL(category.category)}` ? 'text-orange-dark underline' : 'text-orange-light'
                                            }`}
                                        >
                                            {category.category}
                                        </NavigationMenuTrigger>
                                    </Link>
                                    <NavigationMenuContent>
                                        <ul className='list-none'>
                                            {subcategories
                                                .filter((sub) => sub.category === category.category)
                                                .map((subcategory) => (
                                                    <li
                                                        className='mb-2 flex justify-start items-center px-4 bg-grey-light opacity-90 py-4 border border-orange-light'
                                                        key={subcategory.subcategory.toLowerCase()}
                                                    >
                                                        <Link
                                                            className={
                                                                pathname === `/categories/${formatCategoryForURL(category.category)}/${formatCategoryForURL(subcategory.subcategory)}`
                                                                    ? 'text-orange-dark underline'
                                                                    : 'text-orange-light'
                                                            }
                                                            href={`/categories/${formatCategoryForURL(category.category)}/${formatCategoryForURL(subcategory.subcategory)}`}
                                                        >
                                                            {subcategory.subcategory}
                                                        </Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavMenu;
