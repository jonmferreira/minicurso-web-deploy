import React from "react";
import { vi, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { FormLogin } from "@pages/general/Login/FormLogin/index.tsx";
import userEvent from '@testing-library/user-event'
describe('FormLogin', () => {

    render(<FormLogin
        {...{
            setEtapaLogin: vi.fn(() => {
                //
            })
        }}
    ></FormLogin>)

    it('Tentar logar com dados em brancos mostra label "Campo Obrigatório".', async () => {
        const btn = screen.getByTestId(`btnentrar`)
        await userEvent.click(btn)
        await waitFor(() => {
            // screen.debug()// TODO não subir com debug, indo apenas pra estudo
            const erros = screen.queryAllByText('Campo Obrigatório');
            // console.log(erros)// TODO não subir com debug, indo apenas pra estudo
            expect(erros.length).toEqual(2)
        });

    })

})
