import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './tp-account.reducer';
import { ITPAccount } from 'app/shared/model/tp-account.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITPAccountDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const TPAccountDetail = (props: ITPAccountDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { tPAccountEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="gmibankfrontendApp.tPAccount.detail.title">TPAccount</Translate> [<b>{tPAccountEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="description">
              <Translate contentKey="gmibankfrontendApp.tPAccount.description">Description</Translate>
            </span>
          </dt>
          <dd>{tPAccountEntity.description}</dd>
          <dt>
            <span id="balance">
              <Translate contentKey="gmibankfrontendApp.tPAccount.balance">Balance</Translate>
            </span>
          </dt>
          <dd>{tPAccountEntity.balance}</dd>
          <dt>
            <span id="accountType">
              <Translate contentKey="gmibankfrontendApp.tPAccount.accountType">Account Type</Translate>
            </span>
          </dt>
          <dd>{tPAccountEntity.accountType}</dd>
          <dt>
            <span id="accountStatusType">
              <Translate contentKey="gmibankfrontendApp.tPAccount.accountStatusType">Account Status Type</Translate>
            </span>
          </dt>
          <dd>{tPAccountEntity.accountStatusType}</dd>
          <dt>
            <span id="createDate">
              <Translate contentKey="gmibankfrontendApp.tPAccount.createDate">Create Date</Translate>
            </span>
          </dt>
          <dd>
            {tPAccountEntity.createDate ? <TextFormat value={tPAccountEntity.createDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <span id="closedDate">
              <Translate contentKey="gmibankfrontendApp.tPAccount.closedDate">Closed Date</Translate>
            </span>
          </dt>
          <dd>
            {tPAccountEntity.closedDate ? <TextFormat value={tPAccountEntity.closedDate} type="date" format={APP_DATE_FORMAT} /> : null}
          </dd>
          <dt>
            <Translate contentKey="gmibankfrontendApp.tPAccount.employee">Employee</Translate>
          </dt>
          <dd>{tPAccountEntity.employee ? tPAccountEntity.employee.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/tp-account" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/tp-account/${tPAccountEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ tPAccount }: IRootState) => ({
  tPAccountEntity: tPAccount.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPAccountDetail);
