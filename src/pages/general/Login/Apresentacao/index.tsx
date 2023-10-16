import {
    styleBtnLoginApresentacao,
    styleCardLogin,
    styleLogoApresentacao,
    styleRow,
    tituloApresentacao
} from "@pages/general/Login/style.ts";
import {Button} from "primereact/button";
import {Image} from "primereact/image";
import React, {useCallback, useEffect, useMemo} from "react";
import {EtapaLogin} from "@pages/general/Login";
import {iconProjetoBase, logoUEA} from "@/util/styles";

// @ts-ignore
export function Apresentacao({show, setShow, setEtapaLogin}) {
    const showBtn = () => {
        if (!show) {
            setTimeout(() => {
                setShow(true)
            }, 1000)
        }
    }
    showBtn()
    const handleClickLogo = useCallback(() => {
        setTimeout(() => {
            setEtapaLogin(EtapaLogin.LOGIN)
        }, 200)
    }, [setEtapaLogin])

    const showButton = useMemo(() => {
        if (show) {
            return (

                <Button
                    text
                    className={styleBtnLoginApresentacao}
                    onClick={handleClickLogo}
                    size="large"
                >
                    <Image
                        width="250"
                        src={iconProjetoBase}
                        alt="Image"
                    />

                </Button>
            )
        }
        return <></>
    }, [handleClickLogo, show])

    useEffect(() => {
        setTimeout(() => {
            handleClickLogo()
        }, 1600)
    }, [handleClickLogo])
    return (
        <div className={styleCardLogin}>
            <div className={styleRow}>
                <img
                    src={logoUEA}
                    className={styleLogoApresentacao}
                    alt="logo bringel"/>
                <img
                    src={iconProjetoBase}
                    className={styleLogoApresentacao}
                    alt="logo bioplus"/>
            </div>

            {showButton}
            <h6 className={tituloApresentacao}>
                © 2023 Bioplus, Grupo Bringel. Todos os direitos reservados.
            </h6>
        </div>
    )
}
