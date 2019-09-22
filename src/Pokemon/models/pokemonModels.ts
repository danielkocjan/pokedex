import { Name } from '../../shared/models/commonModels';

export interface Pokemon extends Name {
    url: string;
}

export interface PokemonData extends Name {
    id: number;
    // todo: types for abilities, moves, species, stats, types
}
