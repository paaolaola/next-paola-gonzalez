
import { useRouter } from 'next/router';
import mockDataPets from '../../data/products';
import ProductCard from '../../components/ProductCard';

const SearchResultsPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const searchQuery = query ? decodeURIComponent(query).toLowerCase() : '';

  const filteredProducts = mockDataPets.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="px-20 py-10">
      <h1 className="text-2xl font-semibold mb-6">Resultados de búsqueda para: {searchQuery}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No se encontraron productos para la búsqueda.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
