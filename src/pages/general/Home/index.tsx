import { useAuth } from "@/provider/Auth";

export function Home() {
    const style = `
    w-full
    h-full
    flex
    flex-column
    border-orange-500
    surface-overlay
    border-3
    border-round
    font-bold m-2
    flex
    align-items-center
    justify-content-center
    `

    return (
        <div className={`w-full h-screen flex flex-row m-2 p-4`}>
            <div className={style}>
                <div className="flex justify-content-between flex-wrap w-full m-4">
                    <div className="flex align-items-center justify-content-center w-8rem h-8rem bg-primary font-bold border-round m-2">
                        1
                    </div>
                    <div className="flex align-items-center justify-content-center w-8rem h-8rem bg-primary font-bold border-round m-2">
                        2
                    </div>
                </div>
                
                <div className="flex justify-content-between flex-wrap w-full m-4">
                    <div className="flex align-items-center justify-content-center w-8rem h-8rem bg-primary font-bold border-round m-2">
                        1
                    </div>
                    <div className="flex align-items-center justify-content-center w-8rem h-8rem bg-primary font-bold border-round m-2">
                        2
                    </div>
                    <div className="flex align-items-center justify-content-center w-8rem h-8rem bg-primary font-bold border-round m-2">
                        3
                    </div>
                </div>

                <div className="flex justify-content-center flex-wrap w-full m-4">
                    <div className="flex align-items-center justify-content-center w-8rem h-8rem bg-primary font-bold border-round m-2">
                        1
                    </div>
                </div>
            </div>
            <div className={style}>
            </div>
        </div>
    )
}