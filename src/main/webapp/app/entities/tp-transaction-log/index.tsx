import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import TPTransactionLog from './tp-transaction-log';
import TPTransactionLogDetail from './tp-transaction-log-detail';
import TPTransactionLogUpdate from './tp-transaction-log-update';
import TPTransactionLogDeleteDialog from './tp-transaction-log-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={TPTransactionLogUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={TPTransactionLogUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={TPTransactionLogDetail} />
      <ErrorBoundaryRoute path={match.url} component={TPTransactionLog} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={TPTransactionLogDeleteDialog} />
  </>
);

export default Routes;
