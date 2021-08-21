import React from 'react';
import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom';
import Header from './Header';
import Home from '../routes/home';
import Tv from '../routes/tv';
import Search from '../routes/search';
import Detail from '../routes/detail';

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/tv' exact component={Tv}/>
                <Route path='/search' exact component={Search}/>
                <Route path='/movie/:id' exact component={Detail}/>
                <Route path='/tv/:id' exact component={Detail}/>
                <Redirect from='*' to='/'/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;