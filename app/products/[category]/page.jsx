'use client';

import { useParams } from "next/navigation";
import mockDataPets from "../../data/products";
import ProductList from "../../components/ProductList";
import { parseCategoryFromURL } from "../../utils/routeHelp";
import BtnRoterBack from "../../components/BtnRoterBack";

const Category = () => {
    const { category } = useParams();
    const decodedCategory = parseCategoryFromURL(decodeURIComponent(category));

    const filteredProducts = mockDataPets.filter((product) => product.category.toLowerCase() === decodedCategory.toLowerCase());

    return (
        <>
        <div className=" bg-grey-light flex flex-row items-center">
            <BtnRoterBack />
            <h1 className="">
                Estás viendo la categoría de: <span className="font-extrabold capitalize">{decodedCategory}</span>
            </h1>
        </div>
            <ProductList data={filteredProducts} />
            </>
    );
}

export default Category;
