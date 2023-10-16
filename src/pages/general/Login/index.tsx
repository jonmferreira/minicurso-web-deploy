import {flexScreenCenter} from "@/util/styles";
import React, {useMemo, useState} from "react";
import "./style.css"
import {FormLogin} from "@pages/general/Login/FormLogin";
import {Apresentacao} from "@pages/general/Login/Apresentacao";
import {styleContent} from "@pages/general/Login/style.ts";

export enum EtapaLogin {
    APRESENTACAO = 'Apresentação',
    LOGIN = 'Login',
    ESCOLHAPERFIL ='EscolhaPerfil'
}

export function Login() {

    const [etapaLogin, setEtapaLogin] = useState<string>(EtapaLogin.APRESENTACAO);
    const [show, setShow] = useState(false)

    const showLayoutApresentacao = useMemo(() => {
        if (etapaLogin === EtapaLogin.APRESENTACAO) {
            return (
                <Apresentacao
                    setEtapaLogin={setEtapaLogin}
                    show={show}
                    setShow={setShow}
                />
            )
        }
        return <></>
    }, [etapaLogin, show]);

    const showLayoutLoginForm = useMemo(() => {
        if (etapaLogin === EtapaLogin.LOGIN) {
            return <FormLogin setEtapaLogin={setEtapaLogin}/>
        }
        return <></>
    }, [etapaLogin]);

    return (

        <div className={flexScreenCenter}>
            <div className={styleContent}>
                {showLayoutApresentacao}
                {showLayoutLoginForm}
            </div>
        </div>
    )
}
