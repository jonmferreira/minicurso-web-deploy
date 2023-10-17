import {style} from "@pages/general/Home/index.tsx";
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Knob } from 'primereact/knob';  
import { useState } from "react";
import { Button } from "primereact/button";

export const Componente3 = ()=> {

const [value, setValue] = useState()
const [value2, setValue2]= useState(0)

return <div className={`w-full h-screen flex flex-row m-2 p-4`}>

    <div className={style}>
    <div class="flex flex-row flex-wrap gap-8">
    <div class="flex flex-column">
        <h3>
            InputText
        </h3>
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText placeholder="Search" />
        </span>
        <h3>
            Slider
        </h3>
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        <Slider value={value} onChange={(e) => setValue(e.value)} />
        <h3>
            Knob
        </h3>
        <Knob value={value2} onChange={(e) => setValue2(e.value)} />
    </div>
    <div class="flex flex-column">
    <h3>
        Button
    </h3>
    <Button icon="pi pi-check" rounded aria-label="Filter" />
    </div>
    </div>
    </div>
    <div className={style}>
        B
    </div>
</div>
}
