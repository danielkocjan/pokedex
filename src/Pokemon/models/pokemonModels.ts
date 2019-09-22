import { Name } from '../../shared/models/commonModels';

export interface Pokemon extends Name {
    url: string;
}

export interface PokemonData extends Name {
    id: number;
    sprites: {
        frontDefault: string;
    };
    // todo: types for abilities, moves, species, stats, types
}
