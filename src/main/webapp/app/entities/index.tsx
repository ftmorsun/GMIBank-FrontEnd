import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TPState from './tp-state';
import TPCountry from './tp-country';
import TPCustomer from './tp-customer';
import TPEmployee from './tp-employee';
import TPTransactionLog from './tp-transaction-log';
import TPAccount from './tp-account';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}tp-state`} component={TPState} />
      <ErrorBoundaryRoute path={`${match.url}tp-country`} component={TPCountry} />
      <ErrorBoundaryRoute path={`${match.url}tp-customer`} component={TPCustomer} />
      <ErrorBoundaryRoute path={`${match.url}tp-employee`} component={TPEmployee} />
      <ErrorBoundaryRoute path={`${match.url}tp-transaction-log`} component={TPTransactionLog} />
      <ErrorBoundaryRoute path={`${match.url}tp-account`} component={TPAccount} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
