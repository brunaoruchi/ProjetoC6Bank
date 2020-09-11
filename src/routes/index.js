import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Index from '../pages/Index';
import Cadastro from '../pages/Cadastro';
import Lista from '../pages/Lista';

function Routes() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Route path="/" exact component={Index}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/lista" component={Lista}/>
        </BrowserRouter>
    );
}

export default Routes;