import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TPAccount from './tp-account';
import TPAccountDetail from './tp-account-detail';
import TPAccountUpdate from './tp-account-update';
import TPAccountDeleteDialog from './tp-account-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TPAccountUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TPAccountUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TPAccountDetail} />
      <ErrorBoundaryRoute path={match.url} component={TPAccount} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TPAccountDeleteDialog} />
  </>
);

export default Routes;
