import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './tp-employee.reducer';
import { ITPEmployee } from 'app/shared/model/tp-employee.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITPEmployeeProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const TPEmployee = (props: ITPEmployeeProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { tPEmployeeList, match, loading } = props;
  return (
    <div>
      <h2 id="tp-employee-heading">
        <Translate contentKey="gmibankfrontendApp.tPEmployee.home.title">TP Employees</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="gmibankfrontendApp.tPEmployee.home.createLabel">Create new TP Employee</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {tPEmployeeList && tPEmployeeList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.firstName">First Name</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.lastName">Last Name</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.email">Email</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.hireDate">Hire Date</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.mobilePhoneNumber">Mobile Phone Number</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.phoneNumber">Phone Number</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.zipCode">Zip Code</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.address">Address</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.city">City</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.ssn">Ssn</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.createDate">Create Date</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.country">Country</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.state">State</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.user">User</Translate>
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.manager">Manager</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {tPEmployeeList.map((tPEmployee, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${tPEmployee.id}`} color="success" size="sm">
                      {tPEmployee.id}
                    </Button>
                  </td>
                  <td>{tPEmployee.firstName}</td>
                  <td>{tPEmployee.lastName}</td>
                  <td>{tPEmployee.email}</td>
                  <td>{tPEmployee.hireDate ? <TextFormat type="date" value={tPEmployee.hireDate} format={APP_DATE_FORMAT} /> : null}</td>
                  <td>{tPEmployee.mobilePhoneNumber}</td>
                  <td>{tPEmployee.phoneNumber}</td>
                  <td>{tPEmployee.zipCode}</td>
                  <td>{tPEmployee.address}</td>
                  <td>{tPEmployee.city}</td>
                  <td>{tPEmployee.ssn}</td>
                  <td>
                    {tPEmployee.createDate ? <TextFormat type="date" value={tPEmployee.createDate} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  <td>{tPEmployee.country ? <Link to={`tp-country/${tPEmployee.country.id}`}>{tPEmployee.country.name}</Link> : ''}</td>
                  <td>{tPEmployee.state}</td>
                  <td>{tPEmployee.user ? tPEmployee.user.id : ''}</td>
                  <td>{tPEmployee.manager ? <Link to={`tp-employee/${tPEmployee.manager.id}`}>{tPEmployee.manager.id}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${tPEmployee.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${tPEmployee.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${tPEmployee.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="gmibankfrontendApp.tPEmployee.home.notFound">No TP Employees found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ tPEmployee }: IRootState) => ({
  tPEmployeeList: tPEmployee.entities,
  loading: tPEmployee.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPEmployee);
