import { NextResponse } from 'next/server';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../../../../firebase/config';
import { revalidateTag } from 'next/cache';

export async function getProducts({params}){
    try{
        const {category, subcategory} = params;
        const productosRef = collection(db, 'productos');
        let data = query(productosRef);
        if (category && category !== 'all') {
            data = query(data, where('category', '==', category.toLowerCase()));
        }
        if (subcategory && subcategory !== 'all') {
            data = query(data, where('subcategory', '==', subcategory.toLowerCase()));
        }
        const querySnapshot = await getDocs(data);
        const docs = querySnapshot.docs.map((doc) => ({id:doc.id, ...doc.data}));
        return docs;

    } catch(error){
        console.error('Error getting documents from api: ', error);
    }
}
export async function GET(request, { params }) {
    const searchParams = new URL(request.url).searchParams;

    try{
        const products = await getProducts({params});
        revalidateTag('categorias', 60);
        return NextResponse.json(products);
    } catch(error){
        console.error('Error getting products from GET method: ', error);
        return NextResponse.json({error: 'Error getting products from GET method'}, {status: 500});
    }   
}