import {Route, Routes} from "react-router-dom";
import {Login} from "@pages/general/Login";
import {Home} from "@pages/general/Home";
import {Layout} from "../layout/Layout.tsx";
import {RequireAuth} from "@/provider/Auth";
import {RoutersPathName} from "@/routes/schemas.ts";

export const Router: any = () => {
    return (
        <Routes>
            <Route
                element={<Home/>}
                path='/minicurso-web-deploy*'
            />
        </Routes>
    )
}
