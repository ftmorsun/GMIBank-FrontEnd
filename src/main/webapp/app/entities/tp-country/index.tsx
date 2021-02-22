import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TPCountry from './tp-country';
import TPCountryDetail from './tp-country-detail';
import TPCountryUpdate from './tp-country-update';
import TPCountryDeleteDialog from './tp-country-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TPCountryUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TPCountryUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TPCountryDetail} />
      <ErrorBoundaryRoute path={match.url} component={TPCountry} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TPCountryDeleteDialog} />
  </>
);

export default Routes;
