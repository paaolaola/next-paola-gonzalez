import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Search } from 'lucide-react';

import React from 'react';

const SearchProducts = () => {
    return (
        <>
            <div className='flex items-center space-x-2'>
                <Input type='text' placeholder='¿Qué producto estás buscando?' />
                <Button className='bg-primary-red' type='submit'>
                    <Search />
                </Button>
            </div>
        </>
    );
};

export default SearchProducts;
