import React, {useCallback, useMemo, useRef, useState} from "react";
import {styleBtnLogado, styleBtnLogin, styleCardLoginForm, styleForm, styleImg} from "@pages/general/Login/style.ts";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as Z from "zod";
import {useAuth} from "@/provider/Auth";
import {Button} from "primereact/button";
import {Toast} from "primereact/toast";
import {EtapaLogin} from "@pages/general/Login";
import {InputText} from "primereact/inputtext";
import {classNames} from "primereact/utils";
import {iconProjetoBase, logoUEA} from "@/util/styles";
import {useNavigate} from "react-router-dom";
import {RoutersPathName} from "@/routes/schemas.ts";


type LoginFormInputs = Z.infer<typeof loginFormSchema>
const loginFormSchema = Z.object({
    username: Z.string().nonempty('Campo Obrigatório'),
    password: Z.string().nonempty('Campo Obrigatório'),
})

const defaultValues = {
    username: '',
    password: ''
}

// @ts-ignore
export function FormLogin({setEtapaLogin}) {
    const navigate = useNavigate();
    const {
        control,
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<LoginFormInputs>({
        resolver: zodResolver(loginFormSchema),
        defaultValues
    });
    const toast = useRef<Toast>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [timeForFreeClick, setTimeForFreeClick] = useState(0);
    const {signin, estaLogado} = useAuth();

    const tratarError = async (e:any) => {
        const audioErro = new Audio('../../src/audio/somErroLogin.mp3')
        await audioErro.play()
        setTimeout(() => {
            setLoading(false);
        }, timeForFreeClick)
        showErrorLogin(e.message);
        setTimeForFreeClick(timeForFreeClick + 200)
    };

    const showErrorLogin = useCallback((message: string) => {
        toast.current?.show({
            severity: 'error',
            summary: 'Login não completado :(',
            detail: message,
            sticky: true
        });
    }, [toast])

    const limparErro = useCallback(() => {
        toast.current?.clear();
    }, [toast])

    const handleLogin = useMemo(() => {
        return (data: LoginFormInputs) => {
            if (!estaLogado && !loading) {
                setLoading(true);
                limparErro();
                setTimeout(()=> {
                    navigate(RoutersPathName.Home)
                }, 300)
            }
        }
    }, [
        estaLogado,
        limparErro,
        loading,
        showErrorLogin,
        signin,
        timeForFreeClick
    ])
    const showBtnEntrar = useMemo(() => {
        if (estaLogado) {
            setTimeout(() => {

                setEtapaLogin(EtapaLogin.ESCOLHAPERFIL)
            }, 400)
            return <Button
                icon="pi pi-check"
                disabled
                className={styleBtnLogado}
            />
        } else {
            if (loading) {
                return <Button
                    loading={loading}
                    className={styleBtnLogin}
                />
            } else {
                return <Button
                    data-testid="btnentrar"
                    label="Entrar"
                    loading={loading}
                    className={styleBtnLogin}
                    style={{backgroundColor: 'var(--blue-color)'}}
                    type='submit'
                />
            }
        }
    }, [estaLogado, loading, setEtapaLogin])

    const getFormErrorMessage = (name:string) => {
        // @ts-ignore
        return errors[name] ? <small className="p-error">{errors[name].message}</small> :
            <small className="p-error">&nbsp;</small>;
    };

    return (
        <div className={styleCardLoginForm}>
            <Toast ref={toast} position="bottom-center"/>
            <img
                src={logoUEA}
                className={styleImg}
                alt="Logo no login"/>
            <form
                className={styleForm}
                onSubmit={handleSubmit(handleLogin)}>
                <Controller
                    name="username"
                    control={control}
                    render={({field, fieldState}) => (
                        <div className="flex flex-column">
                            <label
                                htmlFor={field.name}
                                className={classNames({'p-error': errors.username})}>
                            </label>
                            <span className="p-float-label">
                                <InputText
                                    id={field.name}
                                    value={field.value}
                                    className={classNames({
                                        'p-invalid': fieldState.error,
                                        'w-full': true
                                    })}
                                    onChange={(e) => field.onChange(e.target.value)}/>
                                <label htmlFor={field.name}>Usuário</label>
                            </span>
                            {getFormErrorMessage(field.name)}
                        </div>
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    render={({field, fieldState}) => (
                        <div className="flex flex-column">
                            <label
                                htmlFor={field.name}
                                className={classNames({'p-error': errors.password})}>
                            </label>
                            <span className="p-float-label">
                                <InputText
                                    id={field.name}
                                    type="password"
                                    value={field.value}
                                    className={classNames({
                                        'p-invalid': fieldState.error,
                                        'w-full': true
                                    })}
                                    onChange={(e) => field.onChange(e.target.value)}/>
                                <label htmlFor={field.name}>Senha</label>
                            </span>
                            {getFormErrorMessage(field.name)}
                        </div>
                    )}
                />

                <div>
                    {showBtnEntrar}
                </div>

            </form>
        </div>
    );
}
