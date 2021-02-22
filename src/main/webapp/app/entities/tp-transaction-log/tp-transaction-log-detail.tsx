import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './tp-transaction-log.reducer';
import { ITPTransactionLog } from 'app/shared/model/tp-transaction-log.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface ITPTransactionLogDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const TPTransactionLogDetail = (props: ITPTransactionLogDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { tPTransactionLogEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2>
          <Translate contentKey="gmibankfrontendApp.tPTransactionLog.detail.title">TPTransactionLog</Translate> [
          <b>{tPTransactionLogEntity.id}</b>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="transactionDate">
              <Translate contentKey="gmibankfrontendApp.tPTransactionLog.transactionDate">Transaction Date</Translate>
            </span>
          </dt>
          <dd>
            {tPTransactionLogEntity.transactionDate ? (
              <TextFormat value={tPTransactionLogEntity.transactionDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="transactionAmount">
              <Translate contentKey="gmibankfrontendApp.tPTransactionLog.transactionAmount">Transaction Amount</Translate>
            </span>
          </dt>
          <dd>{tPTransactionLogEntity.transactionAmount}</dd>
          <dt>
            <span id="newBalance">
              <Translate contentKey="gmibankfrontendApp.tPTransactionLog.newBalance">New Balance</Translate>
            </span>
          </dt>
          <dd>{tPTransactionLogEntity.newBalance}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="gmibankfrontendApp.tPTransactionLog.description">Description</Translate>
            </span>
          </dt>
          <dd>{tPTransactionLogEntity.description}</dd>
          <dt>
            <Translate contentKey="gmibankfrontendApp.tPTransactionLog.tPAccount">T P Account</Translate>
          </dt>
          <dd>{tPTransactionLogEntity.tPAccount ? tPTransactionLogEntity.tPAccount.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/tp-transaction-log" replace color="info">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/tp-transaction-log/${tPTransactionLogEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ tPTransactionLog }: IRootState) => ({
  tPTransactionLogEntity: tPTransactionLog.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPTransactionLogDetail);
