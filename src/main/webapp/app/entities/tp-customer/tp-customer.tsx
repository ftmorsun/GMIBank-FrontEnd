import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate, ICrudGetAllAction, TextFormat, getSortState, IPaginationBaseState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './tp-customer.reducer';
import { ITPCustomer } from 'app/shared/model/tp-customer.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';

export interface ITPCustomerProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const TPCustomer = (props: ITPCustomerProps) => {
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE), props.location.search)
  );

  const getAllEntities = () => {
    props.getEntities(paginationState.activePage - 1, paginationState.itemsPerPage, `${paginationState.sort},${paginationState.order}`);
  };

  const sortEntities = () => {
    getAllEntities();
    const endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const page = params.get('page');
    const sort = params.get('sort');
    if (page && sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: +page,
        sort: sortSplit[0],
        order: sortSplit[1],
      });
    }
  }, [props.location.search]);

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' ? 'desc' : 'asc',
      sort: p,
    });
  };

  const handlePagination = currentPage =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage,
    });

  const { tPCustomerList, match, loading, totalItems } = props;
  return (
    <div>
      <h2 id="tp-customer-heading">
        <Translate contentKey="gmibankfrontendApp.tPCustomer.home.title">TP Customers</Translate>
        <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
          <FontAwesomeIcon icon="plus" />
          &nbsp;
          <Translate contentKey="gmibankfrontendApp.tPCustomer.home.createLabel">Create new TP Customer</Translate>
        </Link>
      </h2>
      <div className="table-responsive">
        {tPCustomerList && tPCustomerList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('firstName')}>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.firstName">First Name</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('lastName')}>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.lastName">Last Name</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('middleInitial')}>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.middleInitial">Middle Initial</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('email')}>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.email">Email</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('mobilePhoneNumber')}>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.mobilePhoneNumber">Mobile Phone Number</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('phoneNumber')}>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.phoneNumber">Phone Number</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                {/* <th className="hand" onClick={sort('zipCode')}>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.zipCode">Zip Code</Translate> <FontAwesomeIcon icon="sort" />
                </th> */}
                <th className="hand" onClick={sort('address')}>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.address">Address</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                {/* <th className="hand" onClick={sort('city')}>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.city">City</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('ssn')}>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.ssn">Ssn</Translate> <FontAwesomeIcon icon="sort" />
                </th> */}
                <th className="hand" onClick={sort('createDate')}>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.createDate">Create Date</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                {/* <th className="hand" onClick={sort('zelleEnrolled')}>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.zelleEnrolled">Zelle Enrolled</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.country">Country</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.state">State</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th>
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.user">User</Translate> <FontAwesomeIcon icon="sort" />
                </th> */}
                <th />
              </tr>
            </thead>
            <tbody>
              {tPCustomerList.map((tPCustomer, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${tPCustomer.id}`} color="success" size="sm">
                      {tPCustomer.id}
                    </Button>
                  </td>
                  <td>{tPCustomer.firstName}</td>
                  <td>{tPCustomer.lastName}</td>
                  <td>{tPCustomer.middleInitial}</td>
                  <td>{tPCustomer.email}</td>
                  <td>{tPCustomer.mobilePhoneNumber}</td>
                  <td>{tPCustomer.phoneNumber}</td>
                  {/* <td>{tPCustomer.zipCode}</td> */}
                  <td>{tPCustomer.address}</td>
                  {/* <td>{tPCustomer.city}</td>
                  <td>{tPCustomer.ssn}</td> */}
                  <td>
                    {tPCustomer.createDate ? <TextFormat type="date" value={tPCustomer.createDate} format={APP_DATE_FORMAT} /> : null}
                  </td>
                  {/* <td>{tPCustomer.zelleEnrolled ? 'true' : 'false'}</td>
                  <td>{tPCustomer.country ? <Link to={`tp-country/${tPCustomer.country.id}`}>{tPCustomer.country.name}</Link> : ''}</td>
                  <td>{tPCustomer.state ? <Link to={`tp-state/${tPCustomer.state.id}`}>{tPCustomer.state.name}</Link> : ''}</td>
                  <td>{tPCustomer.user ? tPCustomer.user.id : ''}</td> */}
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${tPCustomer.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${tPCustomer.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="primary"
                        size="sm"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${tPCustomer.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
                        color="danger"
                        size="sm"
                      >
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
              <Translate contentKey="gmibankfrontendApp.tPCustomer.home.notFound">No TP Customers found</Translate>
            </div>
          )
        )}
      </div>
      {props.totalItems ? (
        <div className={tPCustomerList && tPCustomerList.length > 0 ? '' : 'd-none'}>
          <Row className="justify-content-center">
            <JhiItemCount page={paginationState.activePage} total={totalItems} itemsPerPage={paginationState.itemsPerPage} i18nEnabled />
          </Row>
          <Row className="justify-content-center">
            <JhiPagination
              activePage={paginationState.activePage}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={paginationState.itemsPerPage}
              totalItems={props.totalItems}
            />
          </Row>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = ({ tPCustomer }: IRootState) => ({
  tPCustomerList: tPCustomer.entities,
  loading: tPCustomer.loading,
  totalItems: tPCustomer.totalItems,
  
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPCustomer);
