import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isAuthenticated, isAdmin, component: Component, ...restProps}) => {
    console.log(isAdmin)
    return (
        <Route
            {...restProps}
            component={(props) =>
                isAuthenticated
                ? <Redirect to="/dashboard" /> 
                // : isAuthenticated && localStorage.getItem('userType') === 'Client' 
                // ? <Redirect to="/Findtalent" /> 
                : <Component {...props} />
            }
        />
    )
}

export default PublicRoute;
