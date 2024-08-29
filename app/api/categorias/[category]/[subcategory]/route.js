import mockDataPets from '../../../../data/products';
import { NextResponse } from 'next/server';

// const sleep = (timer) => {
//     return new Promise((resolve) => 
//         setTimeout(resolve, timer)
//     );
// };

export async function GET(request, { params }) {
    const { subcategory } = params;
    const decodedSubCategory = decodeURIComponent(subcategory);

    const data = subcategory === 'all' 
        ? mockDataPets 
        : mockDataPets.filter(
            (product) => product.subcategory.toLowerCase() === decodedSubCategory.toLowerCase()
        );

    // await sleep(2000);

    return NextResponse.json(data);
}
