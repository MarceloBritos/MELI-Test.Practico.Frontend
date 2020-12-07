import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Articulo from './pages/article';
import Home from './pages/home';
import Layout from './components/Layout';



function App() {
    
    return (
        <Provider store={store}>
            <Router basename="/">
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/items" component={Home} />
                        <Route path="/item/:id" component={Articulo} />
                        <Route
                            exact
                            path="*"
                            component={() => (
                                <ul>
                                    <li>
                                        <h2>Error 404</h2>
                                    </li>
                                </ul>
                            )}
                        />
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    );
}

export default App;
