import { style } from "@pages/general/Home/index.tsx";
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Knob } from 'primereact/knob';
import React, { useState } from "react";
import { Button } from 'primereact/button';



export const Componente6 = () => {
    const [value, setValue] = useState('');
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);

    return <div className={`w-full h-screen flex flex-row m-2 p-4`}>

        <div className={style}>
            <div className="card flex flex-column justify-content-around w-full">
                <InputText value={value} onChange={(e) => setValue(e.target.value)} className='w-14rem m-2'/>
                <Slider value={value2} onChange={(e) => setValue2(e.value)} className="w-14rem" />
                <Knob value={value3} onChange={(e) => setValue3(e.value)} className="w-14rem m-2"/>
            </div>
            <div>            
                <Button icon="pi pi-check" rounded aria-label="Filter"  className="w-10rem h-10rem w-full"/>
            </div>
        </div>
        <div className={style}>
        </div>
    </div>
}
