import { Name } from '../../shared/models/commonModels';
import { PaginatedResponse } from '../../shared/models/httpModels';

export interface Pokemon extends Name {
    url: string;
}

export interface Type {
    type: {
        name: string;
    };
}

export interface Stat {
    baseStat: number;
    stat: {
        name: string;
    };
}

export interface PokemonData extends Name {
    id: number;
    sprites: {
        frontDefault: string;
    };
    types: Type[];
    stats: Stat[];
}

export interface PokemonPagination extends PaginatedResponse<Pokemon> {
    page: number;
}
