import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ITPCountry } from 'app/shared/model/tp-country.model';
import { getEntities as getTPCountries } from 'app/entities/tp-country/tp-country.reducer';
import { ITPState } from 'app/shared/model/tp-state.model';
import { getEntities as getTPStates } from 'app/entities/tp-state/tp-state.reducer';
import { IUser } from 'app/shared/model/user.model';
import { getUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { getEntities as getTPEmployees } from 'app/entities/tp-employee/tp-employee.reducer';
import { getEntity, updateEntity, createEntity, reset } from './tp-employee.reducer';
import { ITPEmployee } from 'app/shared/model/tp-employee.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITPEmployeeUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const TPEmployeeUpdate = (props: ITPEmployeeUpdateProps) => {
  const [countryId, setCountryId] = useState('0');
  const [stateId, setStateId] = useState('0');
  const [userId, setUserId] = useState('0');
  const [managerId, setManagerId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { tPEmployeeEntity, tPCountries, users, tPEmployees, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/tp-employee');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getTPCountries();
    props.getUsers();
    props.getTPEmployees();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.hireDate = convertDateTimeToServer(values.hireDate);
    values.createDate = convertDateTimeToServer(values.createDate);

    if (errors.length === 0) {
      const entity = {
        ...tPEmployeeEntity,
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
          <h2 id="gmibankfrontendApp.tPEmployee.home.createOrEditLabel">
            <Translate contentKey="gmibankfrontendApp.tPEmployee.home.createOrEditLabel">Create or edit a TPEmployee</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : tPEmployeeEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="tp-employee-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="tp-employee-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="firstNameLabel" for="tp-employee-firstName">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.firstName">First Name</Translate>
                </Label>
                <AvField
                  id="tp-employee-firstName"
                  type="text"
                  name="firstName"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="lastNameLabel" for="tp-employee-lastName">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.lastName">Last Name</Translate>
                </Label>
                <AvField
                  id="tp-employee-lastName"
                  type="text"
                  name="lastName"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="emailLabel" for="tp-employee-email">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.email">Email</Translate>
                </Label>
                <AvField
                  id="tp-employee-email"
                  type="text"
                  name="email"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="hireDateLabel" for="tp-employee-hireDate">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.hireDate">Hire Date</Translate>
                </Label>
                <AvInput
                  id="tp-employee-hireDate"
                  type="datetime-local"
                  className="form-control"
                  name="hireDate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.tPEmployeeEntity.hireDate)}
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="mobilePhoneNumberLabel" for="tp-employee-mobilePhoneNumber">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.mobilePhoneNumber">Mobile Phone Number</Translate>
                </Label>
                <AvField id="tp-employee-mobilePhoneNumber" type="text" name="mobilePhoneNumber" placeholder="123-456-7890" validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required')  },pattern:{value:"[0-9]{3}-[0-9]{3}-[0-9]{4}"}}} />
              </AvGroup>
              <AvGroup>
                <Label id="phoneNumberLabel" for="tp-employee-phoneNumber">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.phoneNumber">Phone Number</Translate>
                </Label>
                <AvField id="tp-employee-phoneNumber" type="text" name="phoneNumber" placeholder="123-456-7890" validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required')  },pattern:{value:"[0-9]{3}-[0-9]{3}-[0-9]{4}"}}}/>
              </AvGroup>
              <AvGroup>
                <Label id="zipCodeLabel" for="tp-employee-zipCode">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.zipCode">Zip Code</Translate>
                </Label>
                <AvField
                  id="tp-employee-zipCode"
                  type="text"
                  name="zipCode"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="addressLabel" for="tp-employee-address">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.address">Address</Translate>
                </Label>
                <AvField
                  id="tp-employee-address"
                  type="text"
                  name="address"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="cityLabel" for="tp-employee-city">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.city">City</Translate>
                </Label>
                <AvField
                  id="tp-employee-city"
                  type="text"
                  name="city"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="ssnLabel" for="tp-employee-ssn">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.ssn">Ssn</Translate>
                </Label>
                <AvField
                  id="tp-employee-ssn"
                  type="text"
                  name="ssn"
                  placeholder="000-00-0000"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    pattern: {value: '/^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/', errorMessage: 'Your name must be composed only with letter and numbers'},
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="createDateLabel" for="tp-employee-createDate">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.createDate">Create Date</Translate>
                </Label>
                <AvInput
                  id="tp-employee-createDate"
                  type="datetime-local"
                  className="form-control"
                  name="createDate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.tPEmployeeEntity.createDate)}
                />
              </AvGroup>
              <AvGroup>
                <Label for="tp-employee-country">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.country">Country</Translate>
                </Label>
                <AvInput id="tp-employee-country" type="select" className="form-control" name="country.id">
                  <option value="" key="0" />
                  {tPCountries
                    ? tPCountries.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="tp-employee-state">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.state">State</Translate>
                </Label>
                <AvField id="tp-employee-state" type="text" className="form-control" name="state"/>
              </AvGroup>
              <AvGroup>
                <Label for="tp-employee-user">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.user">User</Translate>
                </Label>
                <AvInput id="tp-employee-user" type="select" className="form-control" name="user.id">
                  <option value="" key="0" />
                  {users
                    ? users.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="tp-employee-manager">
                  <Translate contentKey="gmibankfrontendApp.tPEmployee.manager">Manager</Translate>
                </Label>
                <AvInput id="tp-employee-manager" type="select" className="form-control" name="manager.id">
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
              <Button tag={Link} id="cancel-save" to="/tp-employee" replace color="info">
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
  tPCountries: storeState.tPCountry.entities,
  users: storeState.userManagement.users,
  tPEmployees: storeState.tPEmployee.entities,
  tPEmployeeEntity: storeState.tPEmployee.entity,
  loading: storeState.tPEmployee.loading,
  updating: storeState.tPEmployee.updating,
  updateSuccess: storeState.tPEmployee.updateSuccess,
});

const mapDispatchToProps = {
  getTPCountries,
  getUsers,
  getTPEmployees,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPEmployeeUpdate);
