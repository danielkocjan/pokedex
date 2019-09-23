import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemonSpriteByUrl } from '../../shared/helpers/helpers';
import { Spinner } from '../../shared/components/Spinner';
import { useGetPokemons } from '../hooks/useGetPokemons';
import { setNextPage, setPreviousPage } from '../actions/getPokemonsActions';
import {
    isLastPageSelector,
    pokemonsTotalPagesSelector,
    pokemonsResultsSelector,
    isFetchingSelector,
    pokemonsPageSelector,
} from '../selectors/pokemonSelectors';

export const Pokemons: React.FC = () => {
    useGetPokemons();

    const dispatch = useDispatch();
    const nextPage = () => dispatch(setNextPage());
    const previousPage = () => dispatch(setPreviousPage());

    const isLastPage = useSelector(isLastPageSelector);
    const totalPages = useSelector(pokemonsTotalPagesSelector);
    const pokemons = useSelector(pokemonsResultsSelector);
    const isFetching = useSelector(isFetchingSelector);
    const page = useSelector(pokemonsPageSelector);

    return isFetching ? (
        <Spinner />
    ) : (
        <section>
            <main className="pokemons">
                {pokemons.map(({ url, name }) => (
                    <Link to={`/pokemon/${name}`} key={url} className="pokemons__card">
                        <img src={getPokemonSpriteByUrl(url)} alt={name} />
                        <span className="pokemons__card__name">{name}</span>
                    </Link>
                ))}
            </main>

            <div className="pokemons__pagination">
                <button
                    className="pokemons__pagination__btn"
                    disabled={page === 1}
                    onClick={previousPage}
                >
                    Prev
                </button>
                <span>{`${page} / ${totalPages}`}</span>
                <button
                    className="pokemons__pagination__btn"
                    disabled={isLastPage}
                    onClick={nextPage}
                >
                    Next
                </button>
            </div>
        </section>
    );
};
