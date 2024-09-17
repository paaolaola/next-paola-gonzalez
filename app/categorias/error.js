'use client';

import { Button } from "../components/ui/button";
import { useEffect } from "react";

export default function Error ({error, reset}){

    useEffect(()=>{
        console.log(error)
    },[error])

    return(

        <div>
            <h1 className="text-primary-red text-xl">Ups! Algo salió mal</h1>
            <p className="text-orange-light text-sm">{error}</p>
            <Button onClick={reset}>Volver a intentar</Button>
        </div>
    )
}