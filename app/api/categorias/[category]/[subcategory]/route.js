import { NextResponse } from 'next/server';
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../../../../firebase/config';
import { revalidateTag } from 'next/cache';


export async function GET(request, { params }) {
    const { category, subcategory } = params;
    const q = query(collection(db, 'categorias'), where('category', '==', category), where('subcategory', '==', subcategory));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());
    return NextResponse.json(data);
}

