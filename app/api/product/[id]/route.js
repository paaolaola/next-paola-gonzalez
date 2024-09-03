import { NextResponse } from "next/server";
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../../../../firebase/config';
import { revalidateTag } from "next/cache";


export async function GET(request, { params }) {
    const {id} = params;
   if (!id)  {
    return NextResponse.json({ error:'ID is required'}, {status: 400});
   }

   try {

        const docRef = doc(db, 'productos', id);
        const docSnapshot = await getDoc(docRef);
  
        if (!docSnapshot.exists()) {
            return NextResponse.json({ error: 'Product not found'}, {status: 404});
        }
        const productData = docSnapshot.data();
        const product = {
            id: docSnapshot.id,
            ...productData
        };
        revalidateTag('product', 3600);
        return NextResponse.json(product);
    } catch (error) {
        console.error("Error getting document:", error);
        return NextResponse.json({ error: error.message }, {status: 500});
    }
    }
