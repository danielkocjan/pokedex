import { HttpService } from './HttpService';
import { PokemonService } from '../../Pokemon/services/PokemonService';

const httpService = new HttpService();
export const pokemonService = new PokemonService(httpService);
