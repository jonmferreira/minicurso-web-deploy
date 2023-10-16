import RemoteAccessClient from "../api/axios-s-managed.ts";

export interface Login {
    username: string
    password: string
}

export interface LoginResponse {
    refresh: string
    access: string
    email: string
    permissions: string[]
    groups: string[]
}

export const LoginAPI = {
    logar: async (user: Login) => {
            const api = RemoteAccessClient.getInstance(undefined);
            const userResponse: LoginResponse = await api({
                url: "token/",
                method: "POST",
                data: {username: user.username,
                    password: user.password},
            })
            const userRegrouped = {
                ...userResponse,
            }
            RemoteAccessClient.ReconfigureInstance(userResponse.access)
            return {
                status: 200,
                statusText: 'Sucesso ao logar.',
                data: userRegrouped
            };
    }
}
