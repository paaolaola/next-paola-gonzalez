import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';
import React from 'react';

const SearchProducts = () => {
    return (
        <div className="flex items-center justify-center  sm:flex-row  space-x-2">
            <Input 
                type="text" 
                placeholder="¿Qué producto estás buscando?" 
                className="w-58 sm:w-96 md:w-60 lg:w-72 my-2 lg:my-0" 
            />
            <Button 
                className="bg-primary-red mx-2 sm:w-auto lg:mx-0" 
                type="submit"
            >
                <Search />
            </Button>
        </div>
    );
};

export default SearchProducts;
