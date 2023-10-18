import {style} from "@pages/general/Home/index.tsx";

export const Componente7 = () => {
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
            B
        </div>
    </div>
}
