import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { ITPAccount } from 'app/shared/model/tp-account.model';
import { getEntities as getTPAccounts } from 'app/entities/tp-account/tp-account.reducer';
import { getEntity, updateEntity, createEntity, reset } from './tp-transaction-log.reducer';
import { ITPTransactionLog } from 'app/shared/model/tp-transaction-log.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITPTransactionLogUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const TPTransactionLogUpdate = (props: ITPTransactionLogUpdateProps) => {
  const [tPAccountId, setTPAccountId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { tPTransactionLogEntity, tPAccounts, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/tp-transaction-log');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getTPAccounts();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.transactionDate = convertDateTimeToServer(values.transactionDate);

    if (errors.length === 0) {
      const entity = {
        ...tPTransactionLogEntity,
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
          <h2 id="gmibankfrontendApp.tPTransactionLog.home.createOrEditLabel">
            <Translate contentKey="gmibankfrontendApp.tPTransactionLog.home.createOrEditLabel">Create or edit a TPTransactionLog</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : tPTransactionLogEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="tp-transaction-log-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="tp-transaction-log-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="transactionDateLabel" for="tp-transaction-log-transactionDate">
                  <Translate contentKey="gmibankfrontendApp.tPTransactionLog.transactionDate">Transaction Date</Translate>
                </Label>
                <AvInput
                  id="tp-transaction-log-transactionDate"
                  type="datetime-local"
                  className="form-control"
                  name="transactionDate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.tPTransactionLogEntity.transactionDate)}
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="transactionAmountLabel" for="tp-transaction-log-transactionAmount">
                  <Translate contentKey="gmibankfrontendApp.tPTransactionLog.transactionAmount">Transaction Amount</Translate>
                </Label>
                <AvField
                  id="tp-transaction-log-transactionAmount"
                  type="string"
                  className="form-control"
                  name="transactionAmount"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="newBalanceLabel" for="tp-transaction-log-newBalance">
                  <Translate contentKey="gmibankfrontendApp.tPTransactionLog.newBalance">New Balance</Translate>
                </Label>
                <AvField
                  id="tp-transaction-log-newBalance"
                  type="string"
                  className="form-control"
                  name="newBalance"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="descriptionLabel" for="tp-transaction-log-description">
                  <Translate contentKey="gmibankfrontendApp.tPTransactionLog.description">Description</Translate>
                </Label>
                <AvField
                  id="tp-transaction-log-description"
                  type="text"
                  name="description"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label for="tp-transaction-log-tPAccount">
                  <Translate contentKey="gmibankfrontendApp.tPTransactionLog.tPAccount">T P Account</Translate>
                </Label>
                <AvInput id="tp-transaction-log-tPAccount" type="select" className="form-control" name="tPAccount.id">
                  <option value="" key="0" />
                  {tPAccounts
                    ? tPAccounts.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/tp-transaction-log" replace color="info">
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
  tPAccounts: storeState.tPAccount.entities,
  tPTransactionLogEntity: storeState.tPTransactionLog.entity,
  loading: storeState.tPTransactionLog.loading,
  updating: storeState.tPTransactionLog.updating,
  updateSuccess: storeState.tPTransactionLog.updateSuccess,
});

const mapDispatchToProps = {
  getTPAccounts,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPTransactionLogUpdate);
