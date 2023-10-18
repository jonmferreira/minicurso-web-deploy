import {style} from "@pages/general/Home/index.tsx";
import { InputTextarea } from 'primereact/inputtextarea';
import { Knob } from 'primereact/knob';
import { Slider } from 'primereact/slider';
import { Button } from 'primereact/button';
import React, {useState} from 'react';
        
export const Componente7 = () => {
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    return <div className={`w-full h-screen flex flex-row m-2 p-4`}>

        <div className={style}>
            <div className="flex-column w-full">
            <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
            <Slider value={value1} onChange={(e) => setValue1(e.value)} className="w-14rem" />
            <Knob value={value2} onChange={(e) => setValue2(e.value)}/>
            </div>
            <div>
                <Button icon="pi pi-check" rounded
                />
            </div>
        </div>
        <div className={style}>
        </div>
    </div>
}
