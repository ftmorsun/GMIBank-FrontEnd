import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Card, CardTitle, CardText, Table } from 'reactstrap';
import { Translate, logInfo } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getCustomerAccounts } from './tp-customer-accounts.reducer'
import { getAccountTransactions } from '../../entities/tp-transaction-log/tp-transaction-log.reducer'

export interface ITPCustomerAccountsProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> { }

export const TPCustomerAccounts = (props: ITPCustomerAccountsProps) => {
  const [accountId, setAccountId] = useState(0);
  const center = {
    margin: "auto",
  }

  useEffect(() => {
    props.getCustomerAccounts(props.match.params.id);
  }, []);
  
  useEffect(() => {
    props.getAccountTransactions(accountId);
  }, [accountId]);
  

  const clickBtnGoTransactions = (id: number) => {
    props.getAccountTransactions(id);
    setAccountId(id);
  }


  const { tPCustomerAccountList, tpTransactionList } = props;

  logInfo(JSON.stringify("LIST:" + tPCustomerAccountList));
  return (
    <div className="container" style={center}>
      <h2>Customer Accounts</h2>
      <div className="table-responsive">
        {tPCustomerAccountList && tPCustomerAccountList.length > 0 ? (
          <Table striped responsive>
            <thead>
              <tr>
                {accountId!==0?<th>
                  Account ID
                </th>:null}
                
                <th>
                  Account Type
                </th>

                <th>
                  Account Balance
                </th>

                <th>

                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {tPCustomerAccountList.map((account, i) => (
                <tr key={`entity-${i}`}>
                  <td>

                    {account.id!==0?account.id:null}

                  </td>
                  <td>{account.accountType}</td>
                  <td>{account.balance}</td>
                  <td><Button color="success"
                    size="sm" onClick={() => clickBtnGoTransactions(account.id)} >View Transaction</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </div>

      <div className="table-responsive">
        {tpTransactionList && tpTransactionList.length > 0 ? (
          <Table striped responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  Account ID
                </th>
                <th>
                  Description
                </th>
                <th>
                  Date
                </th>
                <th>
                  Amount
                </th>
                <th>
                  New Balance
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {tpTransactionList.map((transaction, i) => (
                <tr key={`entity-${i}`}>
                  <td>{transaction.id}</td>
                  <td>{accountId}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.transactionDate}</td>
                  <td>{transaction.transactionAmount/100}</td>
                  <td>{transaction.newBalance/100}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
            (
              <div className="alert alert-warning">
                 Transaction not found
              </div>
            )
          )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ tPCustomerAccount, tPTransactionLog }: IRootState) => ({
  tPCustomerAccountList: tPCustomerAccount.entities,
  tpTransactionList: tPTransactionLog.entities,
});

const mapDispatchToProps = {
  getCustomerAccounts,
  getAccountTransactions,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPCustomerAccounts)
