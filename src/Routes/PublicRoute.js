import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isAuthenticated, isAdmin, component: Component, ...restProps}) => {
    console.log(isAdmin)
    return (
        <Route
            {...restProps}
            component={(props) =>
                isAuthenticated && isAdmin
                ? <Redirect to="/adminDashboard" /> 
                : isAuthenticated && !isAdmin 
                ? <Redirect to="/workerDashboard" /> 
                : <Component {...props} />
            }
        />
    )
}

export default PublicRoute;
