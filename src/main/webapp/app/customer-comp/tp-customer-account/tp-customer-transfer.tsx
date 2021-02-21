import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Label,Button, Col, Row, Card, CardTitle, CardText, Table } from 'reactstrap';
import { Translate, logInfo, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getCustomerAccounts } from './tp-customer-accounts.reducer';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { TPCustomerAccounts } from './tp-customer-accounts';
import { ITPCustomerAccount } from 'app/shared/model/tp-customer-account';
import { reset,makeTransfer } from './tp-customer-transfer.reducer';

export interface ITPCustomerTransferProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> { }

export const TPCustomerTransfer = (props: ITPCustomerTransferProps) => {

  const [toAccounts,setToAccounts]=useState([]);
  const center = {
    margin: "auto",
  }

  useEffect(() => {
    props.getCustomerAccounts(props.match.params.id);
  }, []);


  const { tPCustomerAccountList } = props;

  logInfo("JSON:Account",JSON.stringify(tPCustomerAccountList));

  let tPCustomerAccountListTo:ITPCustomerAccount[];
  const changeAccount=(event: React.FormEvent<HTMLSelectElement>)=>{
    logInfo("JSON:Account",JSON.stringify(tPCustomerAccountList));
    tPCustomerAccountListTo=tPCustomerAccountList.filter((value)=>value.id!==Number(event.currentTarget.value));
    setToAccounts(tPCustomerAccountListTo);
  }

  const clickBtnTransfer = (event, errors, values) => {
    if (errors.length === 0) {
         let balance:number= values.balance;
         const balancecent:number= values.balancecent;

         balance=balance*100+Number(balancecent);

      const entity = {
        fromAccountId:values.fromAccountId,
        toAccountId:values.toAccountId,
        balance,
        description:values.description,
        userId:props.loginUser
      };

     props.makeTransfer(entity);
     props.getCustomerAccounts(props.match.params.id);
    }
  };

  return (
    <div className="container" style={center}>
      <h2>TRANSFER BETWEEN YOUR ACCOUNTS</h2>
      <AvForm  onSubmit={clickBtnTransfer}>
                 <AvGroup>
                <Label for="tp-accounts">
                 From
                </Label>
                <AvInput id="fromAccountId" type="select" className="form-control" name="fromAccountId"
                 validate={{
                  required: { value: true, errorMessage: translate('entity.validation.required') },
                }}
                onChange={(e)=>changeAccount(e)}> 
                  <option value="" key="0" />
                  {tPCustomerAccountList && tPCustomerAccountList.length > 0 ? tPCustomerAccountList.map((account, i) => (
                        <option value={account.id} key={account.id}>
                          {account.accountType}-{account.id}-{account.balance/100}$
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>

              <AvGroup>
                <Label for="tp-accounts">
                 To
                </Label>
                <AvInput id="toAccountId" type="select" className="form-control"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                name="toAccountId">
                  
                  <option value="" key="0" />
                  {toAccounts && toAccounts.length > 0 ? toAccounts.map((account, i) => (
                        <option value={account.id} key={account.id}>
                          {account.accountType}-{account.id}-{account.balance/100}$
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>

              <AvGroup>
                <Label id="balanceLabel" for="balance">
                  Balance
                </Label>
                <Row>
                <Col sm="6"> <AvField
                  id="balance"
                  type="text"
                  name="balance"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    pattern: {value: '^[0-9]{1,5}$', errorMessage: 'only numbers max 5 digits'},
                  }}
                /></Col>
               :
               <Col sm="1"> <AvField
                  id="balancecent"
                  type="text"
                  name="balancecent"
                  value="0"
                  validate={{
                    pattern: {value: '^[0-9]{1,2}$', errorMessage: 'only numbers max 2 digits'},
                  }}
                /> </Col></Row>
              </AvGroup>

              <AvGroup>
                <Label id="descritionLabel" for="description">
                  Description
                </Label>
                <AvField
                  id="description"
                  type="textarea"
                  name="description"
                  validate={{
                  required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup> 
 

              <Button color="primary" id="make-transfer" type="submit">
                <FontAwesomeIcon icon="save" />
               Make Transfer
              </Button> 

              </AvForm> 
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  tPCustomerAccountList: storeState.tPCustomerAccount.entities,
  loginUser:storeState.authentication.account.id,
});

const mapDispatchToProps = {
  getCustomerAccounts,
  makeTransfer,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(TPCustomerTransfer)
