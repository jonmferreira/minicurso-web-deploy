import {style} from "@pages/general/Home/index.tsx";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

import { Knob, KnobChangeEvent  } from 'primereact/knob';
        
import { Slider, SliderChangeEvent  } from 'primereact/slider';
import { useState } from "react";
        
export const Componente5 = () => {
    const [value, setValue] = useState<number>(50)
    const [Knobvalue, setKnobValue] = useState<number>(0)

    return <div className={`w-full h-screen flex flex-row m-2 p-4`}>

        <div className={style}>
            A
        </div>
        <div className={style}>
            <h3>Input</h3>
            <InputText
            placeholder="set a text..."
            />

            <h3>Slider</h3>
            <Slider
            value={value}
            //@ts-ignore
            onChange={(e: SliderChangeEvent) => setValue(e.value)}
            style={{
                width: 150
            }}
            />

            <h3>Knob</h3>
            <Knob
            value={Knobvalue}
            onChange={(e: KnobChangeEvent) => setKnobValue(e.value)} />
            <br />

            <h3>Button</h3>
            <Button icon="pi pi-check" rounded aria-label="Filter" />

        </div>
    </div>
}
