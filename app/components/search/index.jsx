'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Search } from 'lucide-react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search/results?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex items-center space-x-2">
        <Input 
          type="text" 
          placeholder="¿Qué producto estás buscando?" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button 
          className="bg-primary-red" 
          type="submit"
        >
          <Search />
        </Button>
      </div>
    </form>
  );
};

export default SearchPage;
