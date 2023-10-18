import {style} from "@pages/general/Home/index.tsx";

import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { useState } from "react";

export const Componente2 = ()=> {
    const [value2, setValue2] = useState('')
    const [value, setValue] = useState(0)
    const [value3, setValue3] = useState(0)
    return <div className={`w-full h-screen flex flex-row m-2 p-4`}>
    <div className={style}>
        <div className="flex-auto">
            <div className="locale-us">
                <label htmlFor="locale-us"
                       className="font-bold block mb-2">
                    <InputText type="text"
                               className="p-inputtext-lg" 
                               placeholder="Pesquisar" />

                </label>
            </div>
        </div>
        <div className="flex-auto">
            <label htmlFor="locale-us"
                className="font-bold block mb-2">
                    <Slider value={value} onChange={(e) => {
                        //@ts-ignore
                        setValue(e.value)}}/>

            </label>
        </div>

    </div>

    <div className={style}>
        D
    </div>
</div>
}
