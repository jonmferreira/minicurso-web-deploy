import {style} from "@pages/general/Home/index.tsx";
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export const Componente7 = () => {
    const [value, setValue] = useState(0);
    const [box, setBox] = useState(0);
    const [knob, setKnob] = useState(0);

    const [items, setItems] = useState<string[]>([]);
    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return <div className={`w-full h-screen flex flex-row m-2 p-4`}>

        <div className={style}>
            A
        </div>
        <div className={style}>

            <div className="card flex justify-content-center flex-column align-items-center ">
                <AutoComplete value={box} suggestions={items} completeMethod={search} onChange={(f) => setBox(f.value)} className='m-2'/>
                <Slider value={value} onChange={(e: SliderChangeEvent) => setValue(e.value)} className="w-14rem m-4" />
                <Knob value={knob} onChange={(g: KnobChangeEvent) => setKnob(g.value)} />
            </div>

        </div>
    </div>
}
