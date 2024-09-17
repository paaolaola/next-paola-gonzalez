import { NextResponse } from "next/server";
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../../../../firebase/config';
import { revalidateTag } from "next/cache";


export async function GET(request, { params }) {
    const { id } = params;
    const docRef = doc(db, "product", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return NextResponse.json(docSnap.data());
    } else {
        return NextResponse.error({ status: 404 });
    }
}

