import axios from 'axios';
import { ICrudGetAction, logInfo } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ITPCustomerAccount } from 'app/shared/model/tp-customer-account';
import { ITPTransfer } from 'app/shared/model/tp-transfer.model';
import { ITPTransactionLog } from 'app/shared/model/tp-transaction-log.model';

export const ACTION_TYPES = {
  FETCH_TPCUSTOMER_ACCOUNTLIST: 'tPCustomerAccount/FETCH_TPCUSTOMER_ACCOUNTLIST',
  RESET: 'tPCustomerAccount/RESET',
};

const initialState = {
  entities: [] as ReadonlyArray<ITPCustomerAccount>,
  loading: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false,
};

export type TPCustomerAccountState = Readonly<typeof initialState>;

// Reducer

export default (state: TPCustomerAccountState = initialState, action): TPCustomerAccountState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TPCUSTOMER_ACCOUNTLIST):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_TPCUSTOMER_ACCOUNTLIST):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_TPCUSTOMER_ACCOUNTLIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/tp-customers/accounts';

export const getCustomerAccounts: ICrudGetAction<ITPCustomerAccount> = id => {
  logInfo('ID:' + id);
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TPCUSTOMER_ACCOUNTLIST,
    payload: axios.get<ITPCustomerAccount>(requestUrl),
  };
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
