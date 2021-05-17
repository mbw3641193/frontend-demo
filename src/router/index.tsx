import React from 'react';
import { HashRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Cats_class from '../components/class-component';
import Cats_hooks from '../components/hooks-component';

const App: React.FC = () => {
    return (
        <HashRouter>
            <NavLink to='/hooks-component'>hooks-component</NavLink>
            <b className="divider">|</b>
            <NavLink to='/class-component'>class-component</NavLink>
            <Switch>
                <Redirect path='/' exact to='/hooks-component'></Redirect>
                <Route path='/class-component' component={Cats_class}></Route>
                <Route path='/hooks-component' component={Cats_hooks}></Route>
            </Switch>
        </HashRouter>
    )
}

export default App;