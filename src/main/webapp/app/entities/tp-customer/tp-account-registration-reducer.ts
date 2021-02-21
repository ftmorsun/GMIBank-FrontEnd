import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction, logInfo } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITPAccountRegistration, defaultValue } from 'app/shared/model/tp-account-registration.model';

export const ACTION_TYPES = {
  FETCH_ACCOUNT_REGISTRATION: 'tAccountRegistration/FETCH_ACCOUNT_REGISTRATION',
  RESET: 'tAccountRegistration/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  updating: false,
  entity: defaultValue,
};

export type TPAccountRegistrationState = Readonly<typeof initialState>;

// Reducer

export default (state: TPAccountRegistrationState = initialState, action): TPAccountRegistrationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ACCOUNT_REGISTRATION): {
      return {
        ...state,
        errorMessage: null,
        loading: true,
      };
    }
    case FAILURE(ACTION_TYPES.FETCH_ACCOUNT_REGISTRATION):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ACCOUNT_REGISTRATION): {
      logInfo('SUCCESS' + JSON.stringify(action.payload.data));

      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    }
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/tp-account-registrations/find';

export const getEntityAccountRegistration: ICrudGetAction<ITPAccountRegistration> = ssn => {
  const requestUrl = `${apiUrl}/${ssn}`;
  return {
    type: ACTION_TYPES.FETCH_ACCOUNT_REGISTRATION,
    payload: axios.get<ITPAccountRegistration>(requestUrl),
  };
};

// export const getEntityAccountRegistration: ICrudGetAction<ITPAccountRegistration> = ssn => dispatch=> {
//   const requestUrl = `${apiUrl}/${ssn}`;
//   const result =dispatch( {
//     type: ACTION_TYPES.FETCH_ACCOUNT_REGISTRATION,
//     payload: axios.get<ITPAccountRegistration>(requestUrl),
//   });

//   logInfo(JSON.stringify(result));
//   return result;
// };

export const resetAccountRegistration = () => ({
  type: ACTION_TYPES.RESET,
});
