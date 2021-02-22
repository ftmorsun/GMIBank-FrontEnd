import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction, logInfo } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';
import { ITPCustomerAccount } from 'app/shared/model/tp-customer-account';
import { ITPTransfer } from 'app/shared/model/tp-transfer.model';

export const ACTION_TYPES = {
  MAKE_TRANSFER: 'tPCustomerAccount/MAKE_TRANSFER',
  RESET: 'tPCustomerAccountTransfer/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  updating: false,
  updateSuccess: false,
  entity: {},
};

export type TPCustomerAccountState = Readonly<typeof initialState>;

// Reducer

export default (state: TPCustomerAccountState = initialState, action): TPCustomerAccountState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.MAKE_TRANSFER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.MAKE_TRANSFER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.MAKE_TRANSFER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/tp-customers/transfer';

// export const makeTransfer: ICrudPutAction<ITPTransfer> = entity => async dispatch => {

// logInfo("Transfer entity:"+JSON.stringify(entity));

//   const result = await dispatch({
//     type: ACTION_TYPES.MAKE_TRANSFER,
//     payload: axios.post(apiUrl, cleanEntity(entity)),
//   });
//   return result;
// };

export const makeTransfer = (entity: ITPTransfer) => dispatch => {
  const result = dispatch({
    type: ACTION_TYPES.MAKE_TRANSFER,
    payload: axios.post(apiUrl, entity),
    meta: {
      successMessage: 'Transfer is succesfull',
    },
  });
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
