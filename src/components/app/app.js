import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { DataProvider } from '../data-service-context';
import { CartPage, HomePage, NotFoundPage } from '../pages';
import ErrorBoundary from '../error-boundary';
import store from '../../store';
import DataService from '../../services/data-servise';
import Header from '../header';
import Modal from '../modal';
import FixedCart from '../fixed-cart';
import './app.scss';

const dataServise = new DataService();

const App = () => (
    <Provider store={store}>
        <HashRouter basename='/'>
            <ErrorBoundary>
                <Header />
                <main>
                    <DataProvider value={dataServise}>
                        <div className="container">
                            <Switch>
                                <Route path='/' exact component={HomePage} />
                                <Route path='/cart' exact component={CartPage} />
                                <Route component={NotFoundPage} />
                            </Switch>
                            <Route path='/' exact component={FixedCart} />
                        </div>
                    </DataProvider>
                </main>
            </ErrorBoundary>
        </HashRouter>
        <Modal />
    </Provider>
)

export default App;
