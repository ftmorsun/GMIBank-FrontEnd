import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ITPEmployee } from 'app/shared/model/tp-employee.model';
import { getEntities as getTPEmployees } from 'app/entities/tp-employee/tp-employee.reducer';
import { ITPCustomer } from 'app/shared/model/tp-customer.model';
import { getEntities as getTPCustomers } from 'app/entities/tp-customer/tp-customer.reducer';
import { getEntity, updateEntity, createEntity, reset } from './tp-account.reducer';
import { ITPAccount } from 'app/shared/model/tp-account.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITPAccountUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const TPAccountUpdate = (props: ITPAccountUpdateProps) => {
  const [employeeId, setEmployeeId] = useState('0');
  const [tpcustomerId, setTpcustomerId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { tPAccountEntity, tPEmployees, tPCustomers, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/tp-account');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getTPEmployees();
    props.getTPCustomers();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.createDate = convertDateTimeToServer(values.createDate);
    values.closedDate = convertDateTimeToServer(values.closedDate);

    if (errors.length === 0) {
      const entity = {
        ...tPAccountEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gmibankfrontendApp.tPAccount.home.createOrEditLabel">
            <Translate contentKey="gmibankfrontendApp.tPAccount.home.createOrEditLabel">Create or edit a TPAccount</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : tPAccountEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="tp-account-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="tp-account-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="descriptionLabel" for="tp-account-description">
                  <Translate contentKey="gmibankfrontendApp.tPAccount.description">Description</Translate>
                </Label>
                <AvField
                  id="tp-account-description"
                  type="text"
                  name="description"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="balanceLabel" for="tp-account-balance">
                  <Translate contentKey="gmibankfrontendApp.tPAccount.balance">Balance</Translate>
                </Label>
                <AvField
                  id="tp-account-balance"
                  type="string"
                  className="form-control"
                  name="balance"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="accountTypeLabel" for="tp-account-accountType">
                  <Translate contentKey="gmibankfrontendApp.tPAccount.accountType">Account Type</Translate>
                </Label>
                <AvInput
                  id="tp-account-accountType"
                  type="select"
                  className="form-control"
                  name="accountType"
                  value={(!isNew && tPAccountEntity.accountType) || 'CHECKING'}
                >
                  <option value="CHECKING">{translate('gmibankfrontendApp.TPAccountType.CHECKING')}</option>
                  <option value="SAVING">{translate('gmibankfrontendApp.TPAccountType.SAVING')}</option>
                  <option value="CREDIT_CARD">{translate('gmibankfrontendApp.TPAccountType.CREDIT_CARD')}</option>
                  <option value="INVESTING">{translate('gmibankfrontendApp.TPAccountType.INVESTING')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="accountStatusTypeLabel" for="tp-account-accountStatusType">
                  <Translate contentKey="gmibankfrontendApp.tPAccount.accountStatusType">Account Status Type</Translate>
                </Label>
                <AvInput
                  id="tp-account-accountStatusType"
                  type="select"
                  className="form-control"
                  name="accountStatusType"
                  value={(!isNew && tPAccountEntity.accountStatusType) || 'ACTIVE'}
                >
                  <option value="ACTIVE">{translate('gmibankfrontendApp.TPAccountStatusType.ACTIVE')}</option>
                  <option value="SUESPENDED">{translate('gmibankfrontendApp.TPAccountStatusType.SUESPENDED')}</option>
                  <option value="CLOSED">{translate('gmibankfrontendApp.TPAccountStatusType.CLOSED')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="createDateLabel" for="tp-account-createDate">
                  <Translate contentKey="gmibankfrontendApp.tPAccount.createDate">Create Date</Translate>
                </Label>
                <AvInput
                  id="tp-account-createDate"
                  type="datetime-local"
                  className="form-control"
                  name="createDate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.tPAccountEntity.createDate)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="closedDateLabel" for="tp-account-closedDate">
                  <Translate contentKey="gmibankfrontendApp.tPAccount.closedDate">Closed Date</Translate>
                </Label>
                <AvInput
                  id="tp-account-closedDate"
                  type="datetime-local"
                  className="form-control"
                  name="closedDate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.tPAccountEntity.closedDate)}
                />
              </AvGroup>
              <AvGroup>
                <Label for="tp-account-employee">
                  <Translate contentKey="gmibankfrontendApp.tPAccount.employee">Employee</Translate>
                </Label>
                <AvInput id="tp-account-employee" type="select" className="form-control" name="employee.id">
                  <option value="" key="0" />
                  {tPEmployees
                    ? tPEmployees.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/tp-account" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  tPEmployees: storeState.tPEmployee.entities,
  tPCustomers: storeState.tPCustomer.entities,
  tPAccountEntity: storeState.tPAccount.entity,
  loading: storeState.tPAccount.loading,
  updating: storeState.tPAccount.updating,
  updateSuccess: storeState.tPAccount.updateSuccess,
});

const mapDispatchToProps = {
  getTPEmployees,
  getTPCustomers,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPAccountUpdate);
