import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Views
import Reglaments from './components/content/Reglaments';
import Retention from './components/content/Retention';
// import UserList from './views/UserList';
// import Typography from './views/Typography';
// import Icons from './views/Icons';
// import Account from './views/Account';
// import Settings from './views/Settings';
// import SignUp from './views/SignUp';
// import SignIn from './views/SignIn';
// import UnderDevelopment from './views/UnderDevelopment';
// import NotFound from './views/NotFound';


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
            {/*<Route*/}
            {/*    component={ProductList}*/}
            {/*    exact*/}
            {/*    path="/products"*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    component={Typography}*/}
            {/*    exact*/}
            {/*    path="/typography"*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    component={Icons}*/}
            {/*    exact*/}
            {/*    path="/icons"*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    component={Account}*/}
            {/*    exact*/}
            {/*    path="/account"*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    component={Settings}*/}
            {/*    exact*/}
            {/*    path="/settings"*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    component={SignUp}*/}
            {/*    exact*/}
            {/*    path="/sign-up"*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    component={SignIn}*/}
            {/*    exact*/}
            {/*    path="/sign-in"*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    component={UnderDevelopment}*/}
            {/*    exact*/}
            {/*    path="/under-development"*/}
            {/*/>*/}
            {/*<Route*/}
            {/*    component={NotFound}*/}
            {/*    exact*/}
            {/*    path="/not-found"*/}
            {/*/>*/}
            {/*<Redirect to="/not-found" />*/}
        </Switch>
    );
}

export default Routes