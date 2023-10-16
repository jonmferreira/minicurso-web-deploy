import {ImExit} from 'react-icons/im'
import {CiSettings} from 'react-icons/ci'
import {MenuItem} from 'primereact/menuitem';
import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Menu} from "primereact/menu";
import {Button} from "primereact/button";
import {useAuth} from "@/provider/Auth";

import {RoutersPathName} from "@/routes/schemas.ts";
import './style.css'
import {logoUEA, styeleFlexRowCenter} from "@/util/styles";

import {HeaderClass, styleHeaderBtn, styleLogoHome} from "@/layout/header/style-home.ts";


export function Header() {
    const auth = useAuth();

    const {user} = useAuth()
    const navigation = useNavigate()

    const itemsUser: MenuItem[] = [
        {
            label: 'Configurações',
            icon: <CiSettings size={20} className='mr-2'/>,
            command() {

            },
        },
        {
            label: 'Logout',
            icon: <ImExit size={20} className='mr-2'/>,
            command() {
                auth.signout()
            },
        },
    ];

    const menuUser = useRef<Menu>(null);
    const itemsMenuUser = [
        {
            label: `Bem-vindo`,
            items: itemsUser
        }
    ];
    return (

        <header className={HeaderClass}>
            <Link
                to={RoutersPathName.Home}
                className={styleHeaderBtn}>
                <div className={styeleFlexRowCenter}>
                    <img
                        src={logoUEA}
                        className={styleLogoHome}
                        alt="nome siscme"/>
                </div>
            </Link>

            <div className='submenu'>
                <Menu
                    model={itemsMenuUser}
                    popup
                    ref={menuUser}
                    id="popup_menu_user"
                />
            </div>

            <Button
                className='text-gray-100 font-bold h-2rem hover:bg-blue-800'
                onClick={(event) => {
                    menuUser?.current?.toggle(event)
                }}
                text
                aria-controls="popup_menu_left"
                aria-haspopup
            >
            </Button>
        </header>
    )
}
