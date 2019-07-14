import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Reglaments from './components/content/Reglaments';
import Retention from './components/content/Retention';


const Routes = () =>{
    return (
        <Switch>
            <Redirect
                exact
                from="/"
                to="./components/content/Reglaments"
            />
            <Route
                component={Reglaments}
                exact
                path="/reglaments"
            />
            <Route
                component={Retention}
                exact
                path="/retention"
            />
        </Switch>
    );
}

export default Routes