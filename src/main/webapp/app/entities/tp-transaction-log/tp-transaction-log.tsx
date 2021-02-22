import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './tp-transaction-log.reducer';
import { ITPTransactionLog } from 'app/shared/model/tp-transaction-log.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITPTransactionLogProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const TPTransactionLog = (props: ITPTransactionLogProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { tPTransactionLogList, match, loading } = props;
  return (
    <div>
      <h2 id="tp-transaction-log-heading">
        <Translate contentKey="gmibankfrontendApp.tPTransactionLog.home.title">TP Transaction Logs</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="gmibankfrontendApp.tPTransactionLog.home.createLabel">Create new TP Transaction Log</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {tPTransactionLogList && tPTransactionLogList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPTransactionLog.transactionDate">Transaction Date</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPTransactionLog.transactionAmount">Transaction Amount</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPTransactionLog.newBalance">New Balance</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPTransactionLog.description">Description</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPTransactionLog.tPAccount">T P Account</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {tPTransactionLogList.map((tPTransactionLog, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${tPTransactionLog.id}`} color="success" size="sm">
                      {tPTransactionLog.id}
                    </Button>
                  </td>
                  <td>
                    {tPTransactionLog.transactionDate ? (
                      <TextFormat type="date" value={tPTransactionLog.transactionDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{tPTransactionLog.transactionAmount}</td>
                  <td>{tPTransactionLog.newBalance}</td>
                  <td>{tPTransactionLog.description}</td>
                  <td>
                    {tPTransactionLog.tPAccount ? (
                      <Link to={`tp-account/${tPTransactionLog.tPAccount.id}`}>{tPTransactionLog.tPAccount.id}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${tPTransactionLog.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${tPTransactionLog.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${tPTransactionLog.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="gmibankfrontendApp.tPTransactionLog.home.notFound">No TP Transaction Logs found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ tPTransactionLog }: IRootState) => ({
  tPTransactionLogList: tPTransactionLog.entities,
  loading: tPTransactionLog.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPTransactionLog);
