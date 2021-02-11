import React, { useContext } from 'react';
import { UserContext } from '../../../App';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    // var retrievedObject = localStorage.getItem('response');
    // const userData = JSON.parse(retrievedObject)    

    const email = sessionStorage.getItem('email');
    const name = sessionStorage.getItem('name');

    return (
        <Route
            {...rest}
            render={({ location }) =>
                name || email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;

