import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction, logInfo } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ITPCountry } from 'app/shared/model/tp-country.model';
import { getEntities as getTPCountries } from 'app/entities/tp-country/tp-country.reducer';
import { ITPState } from 'app/shared/model/tp-state.model';
import { getEntities as getTPStates } from 'app/entities/tp-state/tp-state.reducer';
import { IUser } from 'app/shared/model/user.model';
import { getUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { ITPAccount } from 'app/shared/model/tp-account.model';
import { getEntities as getTPAccounts } from 'app/entities/tp-account/tp-account.reducer';
import { getEntity, updateEntity, createEntity, reset } from './tp-customer.reducer';
import { ITPCustomer } from 'app/shared/model/tp-customer.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

import {resetAccountRegistration,getEntityAccountRegistration} from 'app/entities/tp-customer/tp-account-registration-reducer'
import { toast } from 'react-toastify';

export interface ITPCustomerUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const TPCustomerUpdate = (props: ITPCustomerUpdateProps) => {
  const [idsaccount, setIdsaccount] = useState([]);
  const [countryId, setCountryId] = useState('0');
  const [userId, setUserId] = useState('0');
  const [ssn, setSSN] = useState("");
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { tpAccountRegistrationEntity,tPCustomerEntity, tPCountries, users, tPAccounts, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/tp-customer' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
      props.resetAccountRegistration();
    } else {

      props.getEntity(props.match.params.id);
    }

    props.getTPCountries();
    props.getUsers();
    props.getTPAccounts();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
      props.resetAccountRegistration();
    }
  }, [props.updateSuccess]);

  

  const saveEntity = (event, errors, values) => {
    values.createDate = convertDateTimeToServer(values.createDate);

    if (errors.length === 0) {

      logInfo("values......:",JSON.stringify(values));

      const entity = {
        ...tPCustomerEntity,
        ...values,
        accounts: mapIdList(values.accounts),
      };

      logInfo("Saved......:",JSON.stringify(entity));
  
      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }

    logInfo("Errors......:",JSON.stringify(errors));
  };

  const onChangeSSN=(e)=>{
    setSSN(e.target.value);
  }

  const searchClick=()=>{
    if(ssn!=="")
    props.getEntityAccountRegistration(ssn);
    else{
      toast.warn("Please type an SSN number");
    }
  }

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gmibankfrontendApp.tPCustomer.home.createOrEditLabel">
            <Translate contentKey="gmibankfrontendApp.tPCustomer.home.createOrEditLabel">Create or edit a TPCustomer</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : tPCustomerEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="tp-customer-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="tp-customer-id" type="text" className="form-control" name="id" required readOnly  />
                </AvGroup>
              ) : (<div><AvGroup>
                <Label for="search-ssn">
                  SSN
                </Label>
                <AvInput  id="search-ssn" type="text" className="form-control" name="search-ssn" value={tpAccountRegistrationEntity.ssn} placeholder="000-00-0000" onChange={onChangeSSN}
                />
                
              </AvGroup>

              <Button onClick={()=>searchClick()}>Search</Button></div>)}
              <AvGroup>
                <Label id="firstNameLabel" for="tp-customer-firstName">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.firstName">First Name</Translate>
                </Label>
                <AvField
                  id="tp-customer-firstName"
                  type="text"
                  name="firstName"
                  value={tpAccountRegistrationEntity.firstName}
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="lastNameLabel" for="tp-customer-lastName">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.lastName">Last Name</Translate>
                </Label>
                <AvField
                  id="tp-customer-lastName"
                  type="text"
                  value={tpAccountRegistrationEntity.lastName}
                  name="lastName"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="middleInitialLabel" for="tp-customer-middleInitial">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.middleInitial">Middle Initial</Translate>
                </Label>
                <AvField
                  id="tp-customer-middleInitial"
                  type="text"
                  name="middleInitial"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="emailLabel" for="tp-customer-email">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.email">Email</Translate>
                </Label>
                <AvField
                  id="tp-customer-email"
                  type="text"
                  name="email"
                  value={tpAccountRegistrationEntity.email}
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="mobilePhoneNumberLabel" for="tp-customer-mobilePhoneNumber">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.mobilePhoneNumber">Mobile Phone Number</Translate>
                </Label>
                <AvField id="tp-customer-mobilePhoneNumber" type="text" name="mobilePhoneNumber"
                value={tpAccountRegistrationEntity.mobilePhoneNumber}
                placeholder="123-456-7890"  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required')  },pattern:{value:"[0-9]{3}-[0-9]{3}-[0-9]{4}"}}} />
              </AvGroup>
              <AvGroup>
                <Label id="phoneNumberLabel" for="tp-customer-phoneNumber">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.phoneNumber">Phone Number</Translate>
                </Label>
                <AvField id="tp-customer-phoneNumber" type="text" name="phoneNumber" placeholder="123-456-7890"  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required')  },pattern:{value:"[0-9]{3}-[0-9]{3}-[0-9]{4}"}}} />
              </AvGroup>
              <AvGroup>
                <Label id="zipCodeLabel" for="tp-customer-zipCode">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.zipCode">Zip Code</Translate>
                </Label>
                <AvField
                  id="tp-customer-zipCode"
                  type="text"
                  name="zipCode"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="addressLabel" for="tp-customer-address">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.address">Address</Translate>
                </Label>
                <AvField
                  id="tp-customer-address"
                  type="text"
                  name="address"
                  value={tpAccountRegistrationEntity.address}
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="cityLabel" for="tp-customer-city">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.city">City</Translate>
                </Label>
                <AvField
                  id="tp-customer-city"
                  type="text"
                  name="city"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="ssnLabel" for="tp-customer-ssn">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.ssn">Ssn</Translate>
                </Label>
                <AvField
                  id="tp-customer-ssn"
                  type="text"
                  name="ssn"
                  value={tpAccountRegistrationEntity.ssn}
                  placeholder="000-00-0000"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    pattern: {value: '/^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/', errorMessage: 'Your name must be composed only with letter and numbers'},
                  }}
                />
                
              </AvGroup>
              <AvGroup>
                <Label id="createDateLabel" for="tp-customer-createDate">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.createDate">Create Date</Translate>
                </Label>
                <AvInput
                  id="tp-customer-createDate"
                  type="datetime-local"
                  className="form-control"
                  name="createDate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.tPCustomerEntity.createDate)}
                />
              </AvGroup>
              <AvGroup>
                <Label for="tp-customer-country">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.country">Country</Translate>
                </Label>
                <AvInput id="tp-customer-country" type="select" className="form-control" name="country.id">
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
                <Label for="tp-customer-state">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.state">State</Translate>
                </Label>
                <AvField id="tp-customer-state" type="text" className="form-control" name="state"/>
              </AvGroup>
              <AvGroup>
                <Label for="tp-customer-user">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.user">User</Translate>
                </Label>
                <AvInput id="tp-customer-user" type="select" className="form-control" name="user.id" disabled={tpAccountRegistrationEntity.userId?true:false} value={tpAccountRegistrationEntity.userId} >
                  <option value="" key="0" />
                  {users
                    ? users.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.login+" "+otherEntity.firstName+" "+otherEntity.lastName}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="tp-customer-account">
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.account">Account</Translate>
                </Label>
                <AvInput
                  id="tp-customer-account"
                  type="select"
                  multiple
                  className="form-control"
                  name="accounts"
                  value={tPCustomerEntity.accounts && tPCustomerEntity.accounts.map(e => e.id)}
                >
                  <option value="" key="0" />
                  {tPAccounts
                    ? tPAccounts.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.description}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>

              <AvGroup check>
                <Label id="zelleEnrolledLabel">
                  <AvInput id="tp-customer-zelleEnrolled" type="checkbox" className="form-check-input" name="zelleEnrolled" />
                  <Translate contentKey="gmibankfrontendApp.tPCustomer.zelleEnrolled">Zelle Enrolled</Translate>
                </Label>
              </AvGroup>


              <Button tag={Link} id="cancel-save" to="/tp-customer" replace color="info">
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
  tPAccounts: storeState.tPAccount.entities,
  tPCustomerEntity: storeState.tPCustomer.entity,
  loading: storeState.tPCustomer.loading,
  updating: storeState.tPCustomer.updating,
  updateSuccess: storeState.tPCustomer.updateSuccess,
  tpAccountRegistrationEntity:storeState.tPAccountRegistration.entity,
});

const mapDispatchToProps = {
  getTPCountries,
  getUsers,
  getTPAccounts,
  getEntity,
  updateEntity,
  createEntity,
  reset,
  getEntityAccountRegistration,
  resetAccountRegistration,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPCustomerUpdate);
