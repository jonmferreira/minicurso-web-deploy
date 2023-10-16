import {useAuth} from "@/provider/Auth";

export function Home() {
    const style= `
        w-full
        h-full
        flex
        flex-row
        border-orange-500
        surface-overlay
        border-3
        border-round 
        font-bold m-2 
        flex 
        align-items-center 
        justify-content-center
        `;

    return (
        <div className={`w-full h-screen flex flex-row m-2 p-4`}>
            <div className={style}>
            <div class="flex flex-column">
            <div class="flex justify-content-between flex-wrap">
                <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary 
                font-bold border-round m-2">1</div>
                <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary 
                font-bold border-round m-2">2</div>
            </div>
                <div class="flex flex-row flex-wrap">
                    <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">1</div>
                    <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">2</div>
                    <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">3</div>
                </div>
                <div class="flex align-items-center justify-content-center w-4rem h-4rem bg-primary font-bold border-round m-2">3</div>
            </div>
            </div>
            
            <div className={style}>
        
            </div>

        </div>
    )
}

