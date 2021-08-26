import React, { useContext } from "react";

// Routes
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

// All Pages
import PageNotFound from '../Screens/PageNotFound/PageNotFound';
import Loading from '../Components/Loader/Loading';
import Signin from '../Screens/Auth/Signin';
import Signup from '../Screens/Auth/Signup';
import Home from "../Screens/Home/Home";
// Worker
import WorkerDashboard from '../Screens/Worker/WorkerDashboard';
import Profile from "../Screens/Worker/Profile";
// admin
import AdminDashboard from '../Screens/Admin/AdminDashboard';
import Detail from "../Screens/Admin/Detail";
import Payments from "../Screens/Admin/Payments/Payments";

const Routes = ({ isAuthenticated, isAdmin, loading }) => {
  return (
    loading ? <Loading width={50} hegiht={50} /> :
    <Router>
      <Switch>
        <PublicRoute path="/" component={Home} exact={true} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        <PublicRoute path="/signin" component={Signin} exact={true} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        <PublicRoute path="/signup" component={Signup} exact={true} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        <PrivateRoute path="/dashboard" component={isAdmin ? AdminDashboard : WorkerDashboard}exact={true} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        <PrivateRoute path="/profile" component={Profile}exact={true} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        <PrivateRoute path="/detail/:workerId" component={Detail}exact={true} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        <PrivateRoute path="/payment" component={Payments}exact={true} isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        <Route path="*" exact={true} component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;