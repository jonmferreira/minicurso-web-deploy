import { style } from "@pages/general/Home/index.tsx";
import React, { useState } from "react";
import { Slider, SliderChangeEvent } from "primereact/slider";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Knob, KnobChangeEvent } from 'primereact/knob';


export const Componente5 = () => {
    const [sliderValue, setSliderValue] = useState<number>(0);
    const [knobValue, setKnobValue] = useState<number>(30);
    return <div className={`w-full h-screen flex flex-row m-2 p-4`}>
        <div className={style}>
            <div className={`flex-row m-2 p-4`}>
                <span>Input Text</span>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText placeholder="Search" />
                </span>
                <span>Slider</span>
                <Slider
                    value={sliderValue}
                    onChange={
                        //@ts-ignore
                        (e: SliderChangeEvent) => setSliderValue(e.value)
                    }
                    className="w-14rem"
                />
            </div>
            <div className={`flex-row m-2 p-4`}>
                <span>Knob</span>
                <Knob 
                    value={knobValue} 
                    onChange={
                        (e: KnobChangeEvent) => setKnobValue(e.value)
                    }
                    valueTemplate={"{value}%"} 
                />
                <span>Button</span>

                <Button label="OK" />
            </div>
        </div>
        <div className={style}>
            B
        </div>
    </div>
}
