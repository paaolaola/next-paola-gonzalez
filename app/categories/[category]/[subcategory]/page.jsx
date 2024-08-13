'use client';

import { useParams } from "next/navigation";
import mockDataPets from "../../../data/products";
import ProductList from "../../../components/ProductList";
import { parseSubCategoryFromURL } from "../../../utils/routeHelp";
import BtnRoterBack from "../../../components/BtnRoterBack";

const SubCategory = () => {
    const { subcategory } = useParams();
    const decodedSubCategory = parseSubCategoryFromURL(decodeURIComponent(subcategory));

    const filteredProducts = mockDataPets.filter((product) => product.subcategory.toLowerCase() === decodedSubCategory.toLowerCase());

    return (
        <>
        <div className=" bg-grey-light flex flex-row items-center">
            <BtnRoterBack />
            <h1 className="">
                Estás viendo la subcategoría de: <span className="font-extrabold capitalize">{decodedSubCategory}</span>
            </h1>
        </div>
            <ProductList data={filteredProducts} />
            </>
    );
}

export default SubCategory;
