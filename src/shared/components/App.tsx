import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from '../reducers/rootReducer';
import { Pokemons } from '../../Pokemon/components/Pokemons';

const store = createStore(rootReducer);

export const App: React.FC = () => (
    <Provider store={store}>
        <div>Pokedex</div>
        <Pokemons />
    </Provider>
);
