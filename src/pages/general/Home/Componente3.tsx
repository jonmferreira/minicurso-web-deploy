import {style} from "@pages/general/Home/index.tsx";
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Knob } from 'primereact/knob';
import { Button } from 'primereact/button';

import { useState } from "react";

export const Componente3 = ()=> {

    const [valueText, setValueText] = useState()
    const [valueSlider, setValueSlider] = useState(0)
    const [valueKnob, setValueKnob] = useState(0)

    // const {lista, setList} = useComponente1Store()



    return <div className={`w-full h-screen flex flex-row m-2 p-4`}>

        <div className={style}>
        <div className="flex flex-row flex-wrap gap-8">
            <div className="flex flex-column">
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
                <InputText value={valueText} onChange={(e) => {
                    //@ts-ignore
                    setValueText(e.target.value)}} />
                <Slider value={valueSlider} onChange={(e) => {
                    //@ts-ignore
                    setValueSlider(e.value)}} />
                <h3>
                    Knob
                </h3>
                <Knob value={valueKnob} onChange={(e) => setValueKnob(e.value)} />
            </div>
            <div className="flex flex-column">
            <h3>
                Button
            </h3>
            <Button icon="pi pi-check" rounded aria-label="Filter" />
            </div>
        </div>
        <div className={style}>
            <div className="flex flex-row flex-wrap">
                <div className="flex flex-column">
                    <h3>InputText</h3>
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText placeholder="Search" value={valueText} onChange={(e) => {
                            //@ts-ignore
                            setValueText(e.target.value)
                        }}/>
                    </span>
                    <h3>Slider</h3>
                    <Slider value={valueSlider} onChange = {(e) => {
                        //@ts-ignore
                        setValueSlider(e.value)
                    }}/>
                    <h3>Knob</h3>
                    <Knob value={valueKnob} onChange = {(e) => {
                        //
                        setValueKnob(e.value)
                    }}/>
                </div>
                <div>
                    <h3>button</h3>
                    <Button icon="pi pi-check" rounded aria-label="Filter" />
                </div>

            </div>
            
        </div>
    </div>
    </div>
}
function useComponente1Store(): { lista: any; setList: any; } {
    throw new Error("Function not implemented.");
}

