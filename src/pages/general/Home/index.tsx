import {useAuth} from "@/provider/Auth";
import {Componente1} from "@pages/general/Home/Componente1.tsx";
import {Componente3} from '@pages/general/Home/Componente3.tsx'
import React from "react";
import {Componente7} from "@pages/general/Home/Componente7.tsx";
import {Componente6} from "@pages/general/Home/Componente6.tsx";
import {Componente5} from "@pages/general/Home/Componente5.tsx";
import {Componente4} from "@pages/general/Home/Componente4.tsx";
import {Componente2} from "@pages/general/Home/Componente2.tsx";
import {Componente8} from "@pages/general/Home/Componente8.tsx";

export const style = `
            w-full
            h-full
            flex
            flex-row
            border-orange-500
            surface-overlay
            border-3
            border-round
            font-bold m-2
            flex
            align-items-center   
    `

//function Componente3() {
//    return null;
//}

export function Home() {
    const {perfil} = useAuth();


    return (
        <div className={`w-full h-screen flex flex-column m-0 p-0`}>
            <Componente1/>
            <Componente2/>
            <Componente3/>
            <Componente4/>
            <Componente5/>
            <Componente6/>
            <Componente7/>
            <Componente8/>

        </div>
    )
}

