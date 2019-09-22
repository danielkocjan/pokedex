import { HttpService } from '../../shared/services/HttpService';
import { Pokemon, PokemonData } from '../models/pokemonModels';
import { PaginatedResponse } from '../../shared/models/httpModels';
import { Resource } from '../../shared/config/apiConfig';

export class PokemonService {
    constructor(private readonly http: HttpService) {}

    public getPokemons() {
        return this.http.get<PaginatedResponse<Pokemon>>(Resource.Pokemon);
    }

    public getPokemonData(pokemonUrl: string) {
        return this.http.get<PokemonData>(`${Resource.Pokemon}${pokemonUrl}`);
    }
}
