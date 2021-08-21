import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isAuthenticated, component: Component, ...restProps}) => {
    return (
        <Route
            {...restProps}
            component={(props) =>
                isAuthenticated
                ? <Redirect to="/WorkerDashboard" /> 
                : <Component {...props} />
            }
        />
    )
}

export default PublicRoute;
