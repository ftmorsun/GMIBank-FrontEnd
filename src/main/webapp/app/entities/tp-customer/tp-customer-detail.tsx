import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './tp-customer.reducer';
import { ITPCustomer } from 'app/shared/model/tp-customer.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITPCustomerDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const TPCustomerDetail = (props: ITPCustomerDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { tPCustomerEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="gmibankfrontendApp.tPCustomer.detail.title">TPCustomer</Translate> [<b>{tPCustomerEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="firstName">
              <Translate contentKey="gmibankfrontendApp.tPCustomer.firstName">First Name</Translate>
            </span>
          </dt>
          <dd>{tPCustomerEntity.firstName}</dd>
          <dt>
            <span id="lastName">
              <Translate contentKey="gmibankfrontendApp.tPCustomer.lastName">Last Name</Translate>
            </span>
          </dt>
          <dd>{tPCustomerEntity.lastName}</dd>
          <dt>
            <span id="middleInitial">
              <Translate contentKey="gmibankfrontendApp.tPCustomer.middleInitial">Middle Initial</Translate>
            </span>
          </dt>
          <dd>{tPCustomerEntity.middleInitial}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="gmibankfrontendApp.tPCustomer.email">Email</Translate>
            </span>
          </dt>
          <dd>{tPCustomerEntity.email}</dd>
          <dt>
            <span id="mobilePhoneNumber">
              <Translate contentKey="gmibankfrontendApp.tPCustomer.mobilePhoneNumber">Mobile Phone Number</Translate>
            </span>
          </dt>
          <dd>{tPCustomerEntity.mobilePhoneNumber}</dd>
          <dt>
            <span id="phoneNumber">
              <Translate contentKey="gmibankfrontendApp.tPCustomer.phoneNumber">Phone Number</Translate>
            </span>
          </dt>
          <dd>{tPCustomerEntity.phoneNumber}</dd>
          <dt>
            <span id="zipCode">
              <Translate contentKey="gmibankfrontendApp.tPCustomer.zipCode">Zip Code</Translate>
            </span>
          </dt>
          <dd>{tPCustomerEntity.zipCode}</dd>
          <dt>
            <span id="address">
              <Translate contentKey="gmibankfrontendApp.tPCustomer.address">Address</Translate>
            </span>
          </dt>
          <dd>{tPCustomerEntity.address}</dd>
          <dt>
            <span id="city">
              <Translate contentKey="gmibankfrontendApp.tPCustomer.city">City</Translate>
            </span>
          </dt>
          <dd>{tPCustomerEntity.city}</dd>
          <dt>
            <span id="ssn">
              <Translate contentKey="gmibankfrontendApp.tPCustomer.ssn">Ssn</Translate>
            </span>
          </dt>
          <dd>{tPCustomerEntity.ssn}</dd>
          <dt>
            <span id="createDate">
              <Translate contentKey="gmibankfrontendApp.tPCustomer.createDate">Create Date</Translate>
            </span>
          </dt>
          <dd>
            {tPCustomerEntity.createDate ? <TextFormat value={tPCustomerEntity.createDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="zelleEnrolled">
              <Translate contentKey="gmibankfrontendApp.tPCustomer.zelleEnrolled">Zelle Enrolled</Translate>
            </span>
          </dt>
          <dd>{tPCustomerEntity.zelleEnrolled ? 'true' : 'false'}</dd>
          <dt>
            <Translate contentKey="gmibankfrontendApp.tPCustomer.country">Country</Translate>
          </dt>
          <dd>{tPCustomerEntity.country ? tPCustomerEntity.country.name : ''}</dd>
          <dt>
            <Translate contentKey="gmibankfrontendApp.tPCustomer.state">State</Translate>
          </dt>
          <dd>{tPCustomerEntity.state}</dd>
          <dt>
            <Translate contentKey="gmibankfrontendApp.tPCustomer.user">User</Translate>
          </dt>
          <dd>{tPCustomerEntity.user ? tPCustomerEntity.user.id : ''}</dd>
          <dt>
            <Translate contentKey="gmibankfrontendApp.tPCustomer.account">Account</Translate>
          </dt>
          <dd>
            {tPCustomerEntity.accounts
              ? tPCustomerEntity.accounts.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {tPCustomerEntity.accounts && i === tPCustomerEntity.accounts.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/tp-customer" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/tp-customer/${tPCustomerEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ tPCustomer }: IRootState) => ({
  tPCustomerEntity: tPCustomer.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPCustomerDetail);
