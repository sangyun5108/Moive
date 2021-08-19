import React from 'react';
import { BrowserRouter,Route,Redirect,Switch } from 'react-router-dom';
// import Detail from '../routes/Detail';
import Home from '../routes/Home';
import Search from '../routes/Seacrch';
import TV from '../routes/TV';
import Header from './Header';

const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/tv' exact component={TV}/>
                <Route path='/search' exact component={Search}/>
                <Redirect from='*' to='/'/>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;