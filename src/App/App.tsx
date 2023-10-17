import './App.css'
import {BrowserRouter} from 'react-router-dom'
import {Router} from '@/routes/Router.tsx'
import {AuthProvider} from "@/provider/Auth";

export default function App() {
    return (
        //@ts-ignore
        <AuthProvider children={undefined}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </AuthProvider>
    )
}
