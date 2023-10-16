import {createContext, RefObject, useContext, useEffect, useMemo, useRef, useState} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {Login, LoginAPI, LoginResponse} from "@/infra/integrations/login.ts";
import {RoutersPathName} from "@/routes/schemas.ts";
import {Toast} from "primereact/toast";

// @ts-ignore
const setLocalStorage = (key, value) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.error(e)
    }
}

// @ts-ignore
const getLocalStorage = (key, initialValue) => {
    try {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
    } catch (e) {
        return initialValue;
    }
}

const getLocalStoragePerfil = (key: string, initialValue: string) => {
    try {
        const value = window.localStorage.getItem(key);
        return value ? value.replaceAll("\"", '') : initialValue;
    } catch (e) {
        return initialValue;
    }
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
    return useContext(AuthContext);
}

const initialState: LoginResponse = {
    access: "",
    email: "",
    refresh: "",
    groups: [],
    permissions: []
};

interface AuthContextType {
    user: LoginResponse;
    signin: (user: Login) => Promise<void>;
    signout: () => void;
    estaLogado: boolean;
    perfil: string;
    selecionarPerfil: (perfilselecionado: string) => void;
    tostSuccess: (messagem:string) => void
    tostError: (messagem:string) => void
    tostAlert: (messagem:string) => void
    toast: RefObject<Toast>
}

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [user, setUser] = useState<LoginResponse>(() => getLocalStorage("user", initialState));
    const [perfil, setPerfil] = useState<string>(() => getLocalStoragePerfil("perfil", ''))

    const toast = useRef<Toast>(null);
    const tostSuccess = (messagem: string) => {
        toast.current?.show({severity: 'success', summary: 'Feito!', detail: messagem, life: 3000});
    }
    const tostError = (messagem: string) => {
        toast.current?.show({severity: 'error', detail: messagem, sticky: true});
    }
    const tostAlert = (messagem: string) => {
        toast.current?.show({severity: 'warn', detail: messagem, sticky: true});
    }

    const signin = async (user: Login): Promise<void> => {
        try {
            const userResponse = await LoginAPI.logar(user)
            if (!userResponse) {
                throw "Error ao logar"
            }
            const {data} = userResponse
            setUser(data);
        } catch (e){
            //TODO remover tratativa try catch
            setUser({access:'asdasd',email:'',groups:[], permissions:[],refresh:''})
        }

        // @ts-ignore

    };

    const signout = () => {
        setUser(initialState);
        setPerfil('')
    }

    useEffect(() => {
        setLocalStorage("user", user);
    }, [user]);
    useEffect(() => {
        setLocalStorage("perfil", perfil);
    }, [perfil]);

    const estaLogado = useMemo(() => {
        if (user?.access?.length) {
            return true;
        }
        return false;
    }, [user])

    const selecionarPerfil = (perfilSelecionado: string) => {
        setPerfil(perfilSelecionado)
    }

    const value = {
        user,
        signin,
        signout,
        estaLogado,
        selecionarPerfil,
        perfil,
        tostSuccess,
        tostError,
        toast,
        tostAlert
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export const RequireAuth = ({children}: { children: JSX.Element }) => {
    const {estaLogado} = useAuth();
    const location = useLocation();


    //TODO remover para garantir validação de login de usuário
    // if (!estaLogado) {
    //     return (
    //         <Navigate
    //             to={RoutersPathName.Login}
    //             state={{from: location}}
    //             replace
    //         />
    //     )
    // }
    if (location.pathname == '/') {
        return (
            <Navigate
                to={RoutersPathName.Home}
                state={{from: location}}
                replace
            />
        )
    }
    return children;
}
