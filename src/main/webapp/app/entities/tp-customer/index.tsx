import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TPCustomer from './tp-customer';
import TPCustomerDetail from './tp-customer-detail';
import TPCustomerUpdate from './tp-customer-update';
import TPCustomerDeleteDialog from './tp-customer-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TPCustomerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TPCustomerUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TPCustomerDetail} />
      <ErrorBoundaryRoute path={match.url} component={TPCustomer} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TPCustomerDeleteDialog} />
  </>
);

export default Routes;
