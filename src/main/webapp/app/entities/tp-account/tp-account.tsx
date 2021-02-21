import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './tp-account.reducer';
import { ITPAccount } from 'app/shared/model/tp-account.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITPAccountProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const TPAccount = (props: ITPAccountProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { tPAccountList, match, loading } = props;
  return (
    <div>
      <h2 id="tp-account-heading">
        <Translate contentKey="gmibankfrontendApp.tPAccount.home.title">TP Accounts</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="gmibankfrontendApp.tPAccount.home.createLabel">Create new TP Account</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {tPAccountList && tPAccountList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPAccount.description">Description</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPAccount.balance">Balance</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPAccount.accountType">Account Type</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPAccount.accountStatusType">Account Status Type</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPAccount.createDate">Create Date</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPAccount.closedDate">Closed Date</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPAccount.employee">Employee</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {tPAccountList.map((tPAccount, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${tPAccount.id}`} color="success" size="sm">
                      {tPAccount.id}
                    </Button>
                  </td>
                  <td>{tPAccount.description}</td>
                  <td>{tPAccount.balance}</td>
                  <td>
                    <Translate contentKey={`gmibankfrontendApp.TPAccountType.${tPAccount.accountType}`} />
                  </td>
                  <td>
                    <Translate contentKey={`gmibankfrontendApp.TPAccountStatusType.${tPAccount.accountStatusType}`} />
                  </td>
                  <td>{tPAccount.createDate ? <TextFormat type="date" value={tPAccount.createDate} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{tPAccount.closedDate ? <TextFormat type="date" value={tPAccount.closedDate} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{tPAccount.employee ? <Link to={`tp-employee/${tPAccount.employee.id}`}>{tPAccount.employee.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${tPAccount.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${tPAccount.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${tPAccount.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="gmibankfrontendApp.tPAccount.home.notFound">No TP Accounts found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ tPAccount }: IRootState) => ({
  tPAccountList: tPAccount.entities,
  loading: tPAccount.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPAccount);
