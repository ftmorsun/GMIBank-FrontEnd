import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction, logInfo } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITPCustomer, defaultValue } from 'app/shared/model/tp-customer.model';

export const ACTION_TYPES = {
  FETCH_TPCUSTOMER_LIST: 'tPCustomer/FETCH_TPCUSTOMER_LIST',
  FETCH_TPCUSTOMER: 'tPCustomer/FETCH_TPCUSTOMER',
  CREATE_TPCUSTOMER: 'tPCustomer/CREATE_TPCUSTOMER',
  UPDATE_TPCUSTOMER: 'tPCustomer/UPDATE_TPCUSTOMER',
  DELETE_TPCUSTOMER: 'tPCustomer/DELETE_TPCUSTOMER',
  RESET: 'tPCustomer/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITPCustomer>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type TPCustomerState = Readonly<typeof initialState>;

// Reducer

export default (state: TPCustomerState = initialState, action): TPCustomerState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TPCUSTOMER_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TPCUSTOMER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_TPCUSTOMER):
    case REQUEST(ACTION_TYPES.UPDATE_TPCUSTOMER):
    case REQUEST(ACTION_TYPES.DELETE_TPCUSTOMER):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_TPCUSTOMER_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TPCUSTOMER):
    case FAILURE(ACTION_TYPES.CREATE_TPCUSTOMER):
    case FAILURE(ACTION_TYPES.UPDATE_TPCUSTOMER):
    case FAILURE(ACTION_TYPES.DELETE_TPCUSTOMER):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_TPCUSTOMER_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_TPCUSTOMER):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_TPCUSTOMER):
    case SUCCESS(ACTION_TYPES.UPDATE_TPCUSTOMER):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_TPCUSTOMER):
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

const apiUrl = 'api/tp-customers';

// Actions

export const getEntities: ICrudGetAllAction<ITPCustomer> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_TPCUSTOMER_LIST,
    payload: axios.get<ITPCustomer>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<ITPCustomer> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TPCUSTOMER,
    payload: axios.get<ITPCustomer>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ITPCustomer> = entity => async dispatch => {
  logInfo('entity:' + entity);
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TPCUSTOMER,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITPCustomer> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TPCUSTOMER,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITPCustomer> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TPCUSTOMER,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
