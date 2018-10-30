import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from ".././Pages/Home/Home";
import PageNotFound from ".././Pages/Others/PageNotFound";
import Login from '.././Pages/Login/Login';
import SignUp from '.././Pages/Register/SignUp';
import AppliedRoute from './ApplierRoute';

import AuthenticatedRoute from "./AuthenticatedRoute";
import UnAuthenticatedRoute from "./UnauthenticatedRoute";
import Member from ".././Pages/Member/Member";
import Upload from "../Pages/Member/upload/upload";
import Search from "../Pages/Member/search/search";


export default ({ childProps }) =>
  <Switch>
  <AppliedRoute path="/" exact component={Home} props={childProps} />
  <UnAuthenticatedRoute path="/login" exact component={Login} props={childProps} />
  <UnAuthenticatedRoute path="/signup" exact component={SignUp} props={childProps} />
  <AuthenticatedRoute path="/Member" exact component={Member} props={childProps} />
  <AuthenticatedRoute path="/Upload" exact component={Upload} props={childProps} />
  <AuthenticatedRoute path="/SearchFreind" exact component={Search} props={childProps} />
  { /* Finally, catch all unmatched routes */ }
  <Route component={PageNotFound} />
  </Switch>;