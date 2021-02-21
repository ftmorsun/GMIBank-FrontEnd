import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TPEmployee from './tp-employee';
import TPEmployeeDetail from './tp-employee-detail';
import TPEmployeeUpdate from './tp-employee-update';
import TPEmployeeDeleteDialog from './tp-employee-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TPEmployeeUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TPEmployeeUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TPEmployeeDetail} />
      <ErrorBoundaryRoute path={match.url} component={TPEmployee} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TPEmployeeDeleteDialog} />
  </>
);

export default Routes;
