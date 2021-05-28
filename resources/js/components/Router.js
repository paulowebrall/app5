import React from 'react';
import {BrowserRouter, Switch , Route, Link} from 'react-router-dom';


import Index from './page';
import Sobre from './page/sobre';
import Contato from './page/contato';


function Router(){
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/sobre">About</Link>
                    </li>
                    <li>
                    <Link to="/contato">Contato</Link>
                    </li>
                </ul>
            </nav>
            <Switch>

                <Route path="/" exact component={Index} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/contato" component={Contato} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
