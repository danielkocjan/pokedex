import axios, { AxiosRequestConfig } from 'axios';
import camelcaseKeys from 'camelcase-keys';

import { pokeApiUrl, paginationLimit } from '../config/apiConfig';

export class HttpService {
    api = axios.create({
        baseURL: pokeApiUrl,
    });

    public get<T>(url: string): Promise<T> {
        return this.makeRequest<T>({ url });
    }

    public paginationParams(page: number) {
        const offset = paginationLimit * (page - 1);

        return `/?offset=${offset}&limit=${paginationLimit}`;
    }

    private async makeRequest<T>(config: AxiosRequestConfig): Promise<T> {
        const response = await this.api.request<T>(config);

        return (camelcaseKeys(response.data, { deep: true }) as unknown) as T; // lib types are poor
    }
}
