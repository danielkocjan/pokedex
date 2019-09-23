import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { rootReducer } from '../reducers/rootReducer';
import { Pokemons } from '../../Pokemon/components/Pokemons';
import { Pokemon } from '../../Pokemon/components/Pokemon';

const store = createStore(rootReducer);

export const App: React.FC = () => (
    <Router>
        <Provider store={store}>
            <main className="main">
                <Switch>
                    <Route path="/" exact component={Pokemons} />
                    <Route path="/pokemon/:name" component={Pokemon} />
                    <Redirect to="/" />
                </Switch>
            </main>
        </Provider>
    </Router>
);
