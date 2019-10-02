import { HttpService } from '../../shared/services/HttpService';
import { Pokemon, PokemonData } from '../models/pokemonModels';
import { PaginatedResponse } from '../../shared/models/httpModels';
import { Resource } from '../../shared/config/apiConfig';

export class PokemonService {
    constructor(private readonly http: HttpService) {}

    public getPokemons(page: number) {
        const url = `${Resource.Pokemon}${this.http.paginationParams(page)}`;

        return this.http.get<PaginatedResponse<Pokemon>>(url);
    }

    public getPokemonData(pokemonName: string) {
        return this.http.get<PokemonData>(`${Resource.Pokemon}/${pokemonName}`);
    }
}
