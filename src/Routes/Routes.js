import React, { useContext } from "react";

// Routes
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// All Pages
import Loading from '../Components/Loader/Loading';
import Signin from '../Screens/Auth/Signin';
import Signup from '../Screens/Auth/Signup';
import WorkerDashboard from '../Screens/Worker/WorkerDashboard';


const Routes = ({ isAuthenticated, loading }) => {
  return (
    loading ? <Loading width={50} hegiht={50} /> :
    <Router>
      <Switch>
        <PublicRoute path="/" component={Signin} exact={true} isAuthenticated={isAuthenticated} />
        <PublicRoute path="/Signin" component={Signin} exact={true} isAuthenticated={isAuthenticated} />
        <PublicRoute path="/Signup" component={Signup} exact={true} isAuthenticated={isAuthenticated} />
        <PrivateRoute path="/WorkerDashboard" component={WorkerDashboard} exact={true} isAuthenticated={isAuthenticated} />     
      </Switch>
    </Router>
  );
};

export default Routes;