import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITPAccount, defaultValue } from 'app/shared/model/tp-account.model';

export const ACTION_TYPES = {
  FETCH_TPACCOUNT_LIST: 'tPAccount/FETCH_TPACCOUNT_LIST',
  FETCH_TPACCOUNT: 'tPAccount/FETCH_TPACCOUNT',
  CREATE_TPACCOUNT: 'tPAccount/CREATE_TPACCOUNT',
  UPDATE_TPACCOUNT: 'tPAccount/UPDATE_TPACCOUNT',
  DELETE_TPACCOUNT: 'tPAccount/DELETE_TPACCOUNT',
  RESET: 'tPAccount/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITPAccount>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type TPAccountState = Readonly<typeof initialState>;

// Reducer

export default (state: TPAccountState = initialState, action): TPAccountState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TPACCOUNT_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TPACCOUNT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_TPACCOUNT):
    case REQUEST(ACTION_TYPES.UPDATE_TPACCOUNT):
    case REQUEST(ACTION_TYPES.DELETE_TPACCOUNT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_TPACCOUNT_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TPACCOUNT):
    case FAILURE(ACTION_TYPES.CREATE_TPACCOUNT):
    case FAILURE(ACTION_TYPES.UPDATE_TPACCOUNT):
    case FAILURE(ACTION_TYPES.DELETE_TPACCOUNT):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_TPACCOUNT_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_TPACCOUNT):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_TPACCOUNT):
    case SUCCESS(ACTION_TYPES.UPDATE_TPACCOUNT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_TPACCOUNT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/tp-accounts';

// Actions

export const getEntities: ICrudGetAllAction<ITPAccount> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_TPACCOUNT_LIST,
  payload: axios.get<ITPAccount>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<ITPAccount> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TPACCOUNT,
    payload: axios.get<ITPAccount>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ITPAccount> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TPACCOUNT,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITPAccount> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TPACCOUNT,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITPAccount> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TPACCOUNT,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
