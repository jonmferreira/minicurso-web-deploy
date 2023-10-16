import axios, {AxiosInstance} from 'axios';
import env from "@/util/env.ts";
import {LoginResponse} from "@/infra/integrations/login.ts";
import MockAdapter from "axios-mock-adapter"

class RemoteAccessClient {
    private static test = false;
    private static instance: AxiosInstance | undefined;
    private static abortController: AbortController;
    public static mockAdapter: MockAdapter;

    public static prepararModoTeste(): void {
        this.test = true;
        this.instance = axios.create();
        this.mockAdapter = new MockAdapter(this.instance, { delayResponse: 100 });
    }

    public static limparCenariosDeTeste(): void {
        this.mockAdapter.resetHandlers();
        this.mockAdapter.resetHistory();
        this.mockAdapter.reset();
    }

    public static DesfazerModoTeste(): void {
        this.limparCenariosDeTeste();
        this.mockAdapter.restore();
        this.test = false;
        this.instance = undefined;
    }

    public static getInstance(user: LoginResponse | undefined): AxiosInstance {
        if (this.test) {
            if (this.instance) {
                return this.instance;
            } else {
                this.instance = axios.create();
                this.mockAdapter = new MockAdapter(this.instance);
            }
        }
        if (!this.instance) {
            if (user) {
                this.instance = this.ReconfigureInstance(user.access);
            } else {
                this.instance = this.configureInterceptors(this.configureInstance());
            }
        }
        return this.instance;
    }

    public static getInstanceFormData(user: LoginResponse): AxiosInstance {
        return this.ReconfigureInstanceFormData(user.access)
    }

    public static cancelCall(): void {
        this.abortController.abort();
    }

    private static configureInstance(): AxiosInstance {
        this.abortController = new AbortController();
        return axios.create({
            baseURL: env.api_url + '/api',
            timeout: 0,
            headers: {'Content-Type': 'application/json'},
            signal: this.abortController.signal,
        });
    }

    static ReconfigureInstanceFormData(token: string): AxiosInstance {
        this.abortController = new AbortController();
        const instance = axios.create({
            baseURL: env.api_url + '/api',
            timeout: 0,
            headers: {
                "Content-Type": 'multipart/form-data',
                "Authorization": `Bearer ${token}`
            },
            signal: this.abortController.signal,
        });
        return this.configureInterceptors(instance)
    }

    static ReconfigureInstance(token: string): AxiosInstance {
        this.abortController = new AbortController();
        const instance = axios.create({
            baseURL: env.api_url + '/api',
            timeout: 0,
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            signal: this.abortController.signal,
        });
        this.instance = this.configureInterceptors(instance)
        return this.instance;
    }

    // @ts-ignore
    private static configureInterceptors(instance): AxiosInstance {
        instance.interceptors.response.use(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            function (response) {
                return response;
            },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            function (error) {
                return Promise.reject(error);
            },
        );
        return instance;
    }
}

export default RemoteAccessClient;
