import { NextResponse } from 'next/server';
import { collection, getDocs, query, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';

export async function GET(request) {
    const url = new URL(request.url);
    const categorias = url.pathname.split('/').pop();

    try {
        const docRef = doc(db, 'categorias', categorias);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return NextResponse.json(docSnap.data());
        } else {
            return NextResponse.json({ error: 'Categoría no encontrada' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error al obtener la categoría:', error);
        return NextResponse.json({ error: 'Error al obtener la categoría' }, { status: 500 });
    }
}
