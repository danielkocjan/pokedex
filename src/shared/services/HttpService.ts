import axios, { AxiosRequestConfig } from 'axios';
import camelcaseKeys from 'camelcase-keys';

import { pokeApiUrl } from '../config/apiConfig';

export class HttpService {
    api = axios.create({
        baseURL: pokeApiUrl,
    });

    public get<T>(url: string): Promise<T> {
        return this.makeRequest<T>({ url });
    }

    private async makeRequest<T>(config: AxiosRequestConfig): Promise<T> {
        const response = await this.api.request<T>(config);

        return (camelcaseKeys(response.data, { deep: true }) as unknown) as T; // lib types are poor
    }
}
