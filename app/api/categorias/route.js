import { NextResponse } from 'next/server';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { revalidatePath, revalidateTag } from 'next/cache';

async function getProducts() {
    const productosRef = collection(db, 'productos');
    const data = query(productosRef);
    const querySnapshot = await getDocs(data);
    const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function GET(request) {
    const searchParams = new URL(request.url).searchParams;
    const id = searchParams.get('id');
    if (id) {
        try {
            const productoRef = doc(db, 'productos', id);
            const docSnap = await getDoc(productoRef);
            if (docSnap.exists()) {
                return NextResponse.json({ id: docSnap.id, ...docSnap.data() });
            } else {
                return NextResponse.json({ error: 'Product not found' }, { status: 404 });
            }
        } catch (error) {
            console.error('Error fetching product', error);
            return NextResponse.json({ error: 'Error fetching product' }, { status: 500 });
        }
    }

    try {
        const products = await getProducts();
        revalidateTag('products', 60);
        // revalidatePath('/api/categorias', 60);
        return NextResponse.json(products);
    } catch (error) {
        console.error('Error fetching products', error);
        return NextResponse.json({ error: 'Error fetching products' }, { status: 500 });
    }
}
