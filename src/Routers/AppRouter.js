import React from 'react'
import {Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header/index';
import Home from '../components/Home/index';
import Footer from '../components/Footer/index';


export const history = createHistory();
const AppRouter = () =>{
    return(
        <div>
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path="/Header" component={Header}/>
                <Route path="/home" component={Home}/>
                <Route path="/footer" component={Footer}/>
            </Switch>
            </Router>
            </div>

    )
}
export default AppRouter