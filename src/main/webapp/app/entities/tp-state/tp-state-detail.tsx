import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './tp-state.reducer';
import { ITPState } from 'app/shared/model/tp-state.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITPStateDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const TPStateDetail = (props: ITPStateDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { tPStateEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="gmibankfrontendApp.tPState.detail.title">TPState</Translate> [<b>{tPStateEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="name">
              <Translate contentKey="gmibankfrontendApp.tPState.name">Name</Translate>
            </span>
          </dt>
          <dd>{tPStateEntity.name}</dd>
          <dt>
            <Translate contentKey="gmibankfrontendApp.tPState.tPCountry">T P Country</Translate>
          </dt>
          <dd>{tPStateEntity.tpcountry ? tPStateEntity.tpcountry.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/tp-state" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/tp-state/${tPStateEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ tPState }: IRootState) => ({
  tPStateEntity: tPState.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPStateDetail);
