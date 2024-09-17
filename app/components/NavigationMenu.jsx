'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
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
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const pathname = usePathname();

    useEffect(() => {
       
        const fetchData = async () => {
            try {
                const response = await fetch('https://degatosyperros.vercel.app/api/categorias/all'); 
                const data = await response.json();

                
                const uniqueCategories = data.filter(
                    (product, index, self) =>
                        index === self.findIndex((t) => t.category === product.category)
                );
                const uniqueSubcategories = data.filter(
                    (product, index, self) =>
                        index === self.findIndex((t) => t.subcategory === product.subcategory)
                );

                setCategories(uniqueCategories);
                setSubcategories(uniqueSubcategories);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 

    return (
        <div className="bg-grey-light border border-orange-light px-4 py-4 md:px-6 md:py-4 font-bebas text-base flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-0 text-blue-400 z-40">
            <h1 className="text-xl hover:text-blue-500 md:px-8 w-72">
                <Link href="/categorias">Ver todas las categorías</Link>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
                <ul className="flex flex-col md:flex-row md:space-x-4 lg:text-xl text-sm w-full md:w-auto space-y-2 lg:space-y-0 md:space-y-0">
                    {categories.map((category) => (
                        <NavigationMenu key={category.category.toLowerCase()} className="w-full">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link href={`/categorias/${formatCategoryForURL(category.category)}`} legacyBehavior passHref>
                                        <NavigationMenuTrigger
                                            className={`text-xl font-bebas text-orange-light hover:text-orange-dark ${
                                                pathname === `/categorias/${formatCategoryForURL(category.category)}` ? 'text-orange-dark underline' : 'text-orange-light'
                                            }`}
                                        >
                                            {category.category}
                                        </NavigationMenuTrigger>
                                    </Link>
                                    <NavigationMenuContent>
                                        <ul className="list-none w-48">
                                            {subcategories
                                                .filter((sub) => sub.category === category.category)
                                                .map((subcategory) => (
                                                    <li
                                                        className="mb-2 flex justify-start items-center px-4 bg-grey-light opacity-90 py-4 border border-orange-light"
                                                        key={subcategory.subcategory.toLowerCase()}
                                                    >
                                                        <Link
                                                            className={
                                                                pathname === `/categorias/${formatCategoryForURL(category.category)}/${formatCategoryForURL(subcategory.subcategory)}`
                                                                    ? 'text-orange-dark underline'
                                                                    : 'text-orange-light'
                                                            }
                                                            href={`/categorias/${formatCategoryForURL(category.category)}/${formatCategoryForURL(subcategory.subcategory)}`}
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
