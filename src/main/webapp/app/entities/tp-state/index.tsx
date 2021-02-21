import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TPState from './tp-state';
import TPStateDetail from './tp-state-detail';
import TPStateUpdate from './tp-state-update';
import TPStateDeleteDialog from './tp-state-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TPStateUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TPStateUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TPStateDetail} />
      <ErrorBoundaryRoute path={match.url} component={TPState} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TPStateDeleteDialog} />
  </>
);

export default Routes;
