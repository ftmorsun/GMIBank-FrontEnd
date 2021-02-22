import React from 'react';
import { Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Login from 'app/modules/login/login';
import Register from 'app/modules/account/register/register';
import Activate from 'app/modules/account/activate/activate';
import PasswordResetInit from 'app/modules/account/password-reset/init/password-reset-init';
import PasswordResetFinish from 'app/modules/account/password-reset/finish/password-reset-finish';
import Logout from 'app/modules/login/logout';
import Home from 'app/modules/home/home';
import Entities from 'app/entities';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import PageNotFound from 'app/shared/error/page-not-found';
import { AUTHORITIES } from 'app/config/constants';
import Loan from './tpui/Loan';
import About from './tpui/About';
import Services from './tpui/Services';
import ApplyLoan from './tpui/ApplyLoan';
import Blog from './tpui/Blog';
import BlogSingle from './tpui/BlogSingle';
import Contact from './tpui/Contact';
import CustomerComp from 'app/customer-comp';

const Account = Loadable({
  loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
  loading: () => <div>loading ...</div>,
});

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => <div>loading ...</div>,
});

const Customer = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/customer-comp'),
  loading: () => <div>loading ...</div>,
});


const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute  path={'/loan'} component={Loan} />
      <ErrorBoundaryRoute  path={'/about'}component={About} />
      <ErrorBoundaryRoute  path={'/services'} component={Services} />
      <ErrorBoundaryRoute  path={'/apply-loan'} component={ApplyLoan} />
      <ErrorBoundaryRoute  path={'/blog'} component={Blog} />
      <ErrorBoundaryRoute  path={'/blog-single'} component={BlogSingle} />
      <ErrorBoundaryRoute  path={'/contact'} component={Contact} />

      <ErrorBoundaryRoute path="/login" component={Login} />
      <ErrorBoundaryRoute path="/logout" component={Logout} />
      <ErrorBoundaryRoute path="/account/register" component={Register} />
      <ErrorBoundaryRoute path="/account/activate/:key?" component={Activate} />
      <ErrorBoundaryRoute path="/account/reset/request" component={PasswordResetInit} />
      <ErrorBoundaryRoute path="/account/reset/finish/:key?" component={PasswordResetFinish} />
      <PrivateRoute path="/admin" component={Admin} hasAnyAuthorities={[AUTHORITIES.ADMIN]} />
      <PrivateRoute path="/account" component={Account} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER,AUTHORITIES.CUSTOMER,AUTHORITIES.EMPLOYEE,AUTHORITIES.MANAGER]} />
      <ErrorBoundaryRoute path="/" exact component={Home} />
      
      <PrivateRoute path="/customer" component={Customer} hasAnyAuthorities={[AUTHORITIES.CUSTOMER]} />
      <PrivateRoute path="/" component={Entities} hasAnyAuthorities={[AUTHORITIES.USER,AUTHORITIES.MANAGER,AUTHORITIES.EMPLOYEE]} />
      <ErrorBoundaryRoute component={PageNotFound} />
    </Switch>
  </div>
);

export default Routes;
