import { NextResponse } from 'next/server';
import { collection, getDocs, query } from 'firebase/firestore';
import {db} from '../../../firebase/config';



export async function GET(request, { params }) {
    try {
        const { category } = params;
     

        const productosRef = collection(db, 'productos');
        const data = category === 'all' ? productosRef : query(productosRef, where('categorias', '==', category));
        const querySnapshot = await getDocs(data);

        const docs = querySnapshot.docs.map(doc => doc.data());
        return NextResponse.json(docs);
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
    }
}

