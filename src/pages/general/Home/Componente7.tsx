import {style} from "@pages/general/Home/index.tsx";

import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import React, {useState} from 'react';

import { Slider, SliderChangeEvent } from "primereact/slider";
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export const Componente7 = () => {
    const [value, setValue] = useState(0);
    const[input, setInput] = useState("");
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
        
    const [box, setBox] = useState(0);
    const [knob, setKnob] = useState(0);

    const [items, setItems] = useState<string[]>([]);
    const search = (event: AutoCompleteCompleteEvent) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }
      
    return <div className={`w-full h-screen flex flex-row m-2 p-4`}>

        <div className={style}>
            <div className="flex-column w-full">
            <InputTextarea value={input} onChange={(e) => {
                //@ts-ignore
                setInput(e.target.value)}} rows={5} cols={30} />
            <Slider value={value1} onChange={(e) => {
                //@ts-ignore
                setValue1(e.value)}} className="w-14rem" />
            <Knob value={value2} onChange={(e) => setValue2(e.value)}/>
            </div>
            <div>
                <Button icon="pi pi-check" rounded
                />
            </div>
        </div>

        <div className={style}>
        <div className="card flex justify-content-center flex-column align-items-center ">
                <AutoComplete value={box} suggestions={items} completeMethod={search} onChange={(f) => setBox(f.value)} className='m-2'/>
                <Slider value={value} onChange={(e: SliderChangeEvent) => {
                    //@ts-ignore
                    setValue(e.value)}} className="w-14rem m-4" />
                <Knob value={knob} onChange={(g: KnobChangeEvent) => setKnob(g.value)} />
            </div>
        </div>
    </div>
}