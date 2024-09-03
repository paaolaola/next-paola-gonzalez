import { NextResponse } from 'next/server';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import { revalidateTag } from 'next/cache';

async function getProducts({ params }) {
    try {
        const { category } = params;
        const productosRef = collection(db, 'productos');
        const data = category === 'all' ? productosRef : query(productosRef, where('category', '==', category.toLowerCase()));
        const querySnapshot = await getDocs(data);
        const docs = querySnapshot.docs.map((doc) => doc.data());
        return docs;
    } catch (error) {
        console.error('Error getting documents from api: ', error);
    }
}

export async function GET(request, { params }) {
    try {
        const products = await getProducts({ params });
        revalidateTag('categorias', 60);
        return NextResponse.json(products);
    } catch (error) {
        console.error('Error getting products from GET method: ', error);
        return NextResponse.json({ error: 'Error getting products from GET method' }, { status: 500 });
    }
}
