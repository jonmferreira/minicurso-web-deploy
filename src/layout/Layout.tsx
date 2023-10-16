import { Outlet } from "react-router-dom";
import { useAuth } from "@/provider/Auth";
import { Header } from "./header";
import React, { useMemo } from "react";
import { Toast } from "primereact/toast";

export function Layout() {
    const { toast } = useAuth();
    const showHeader = useMemo(() => {
        return <Header />
    }, [])
    return (
        <>
            <Toast ref={toast} />
            {showHeader}
            <Outlet />
        </>
    )
}
