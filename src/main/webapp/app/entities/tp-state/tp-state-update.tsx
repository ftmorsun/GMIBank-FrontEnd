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
import { getEntity, updateEntity, createEntity, reset } from './tp-state.reducer';
import { ITPState } from 'app/shared/model/tp-state.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface ITPStateUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const TPStateUpdate = (props: ITPStateUpdateProps) => {
  const [tPCountryId, setTPCountryId] = useState('0');
  const [isNew, setIsNew] = useState(!props.match.params || !props.match.params.id);

  const { tPStateEntity, tPCountries, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/tp-state');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getTPCountries();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...tPStateEntity,
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
          <h2 id="gmibankfrontendApp.tPState.home.createOrEditLabel">
            <Translate contentKey="gmibankfrontendApp.tPState.home.createOrEditLabel">Create or edit a TPState</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : tPStateEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="tp-state-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="tp-state-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nameLabel" for="tp-state-name">
                  <Translate contentKey="gmibankfrontendApp.tPState.name">Name</Translate>
                </Label>
                <AvField id="tp-state-name" type="text" name="name" />
              </AvGroup>
              <AvGroup>
                <Label for="tp-state-tPCountry">
                  <Translate contentKey="gmibankfrontendApp.tPState.tPCountry">Country</Translate>
                </Label>
                <AvInput id="tp-state-tPCountry" type="select" className="form-control" name="tPCountry.id">
                  <option value="" key="0" />
                  {tPCountries
                    ? tPCountries.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.id}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/tp-state" replace color="info">
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
  tPStateEntity: storeState.tPState.entity,
  loading: storeState.tPState.loading,
  updating: storeState.tPState.updating,
  updateSuccess: storeState.tPState.updateSuccess,
});

const mapDispatchToProps = {
  getTPCountries,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPStateUpdate);
