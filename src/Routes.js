import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Reglaments from './components/content/reglaments';
import Reglament1 from './components/content/reglaments/Reglament1';
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
            <Route
            component={Reglament1}
            exact
            path="/reglament1"
        />
        </Switch>
    );
};

export default Routes