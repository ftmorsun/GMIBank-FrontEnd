import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import TPCustomerAccounts from './tp-customer-account/tp-customer-accounts';
import  TPCustomerTransfer  from './tp-customer-account/tp-customer-transfer';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>

      <ErrorBoundaryRoute exact path={`${match.url}/tp-customer-accounts/:id`} component={TPCustomerAccounts} />
      <ErrorBoundaryRoute exact path={`${match.url}/tp-customer-accounts/transfer/:id`} component={TPCustomerTransfer} />
    </Switch>
  </div>
);

export default Routes;
