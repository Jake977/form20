import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';

import NavBar from '../NavBar/NavBar';
import Users from '../Users/Users';
import AddUser from '../Users/AddUser';

const App = () => {
    return (
        <div className="app-container">
            <NavBar />
            <div className="form-container">
                <Switch>
                    <Route path="/users" component={Users} />
                    <Route path="/sign-up" component={AddUser} />
                    <Redirect from="*" to="/" />
                </Switch>
            </div>
        </div>
    );
};

export default App;
