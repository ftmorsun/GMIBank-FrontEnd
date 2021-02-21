import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, logInfo } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './tp-state.reducer';
import { ITPState } from 'app/shared/model/tp-state.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITPStateProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const TPState = (props: ITPStateProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { tPStateList, match, loading } = props;
  logInfo(JSON.stringify(tPStateList));
  return (
    <div>
      <h2 id="tp-state-heading">
        <Translate contentKey="gmibankfrontendApp.tPState.home.title">TP States</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="gmibankfrontendApp.tPState.home.createLabel">Create new TP State</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {tPStateList && tPStateList.length > 0 ? (
     
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPState.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPState.tPCountry">Country</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {tPStateList.map((tPState, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${tPState.id}`} color="success" size="sm">
                      {tPState.id}
                    </Button>
                  </td>
                  <td>{tPState.name}</td>
                  <td>{tPState.tpcountry ? <Link to={`tp-country/${tPState.tpcountry.id}`}>{tPState.tpcountry.name}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${tPState.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${tPState.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${tPState.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="gmibankfrontendApp.tPState.home.notFound">No TP States found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ tPState }: IRootState) => ({
  tPStateList: tPState.entities,
  loading: tPState.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPState);
