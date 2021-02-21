import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITPTransactionLog, defaultValue } from 'app/shared/model/tp-transaction-log.model';

export const ACTION_TYPES = {
  FETCH_TPTRANSACTIONLOG_LIST: 'tPTransactionLog/FETCH_TPTRANSACTIONLOG_LIST',
  FETCH_TPTRANSACTIONLOG: 'tPTransactionLog/FETCH_TPTRANSACTIONLOG',
  CREATE_TPTRANSACTIONLOG: 'tPTransactionLog/CREATE_TPTRANSACTIONLOG',
  UPDATE_TPTRANSACTIONLOG: 'tPTransactionLog/UPDATE_TPTRANSACTIONLOG',
  DELETE_TPTRANSACTIONLOG: 'tPTransactionLog/DELETE_TPTRANSACTIONLOG',
  RESET: 'tPTransactionLog/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITPTransactionLog>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type TPTransactionLogState = Readonly<typeof initialState>;

// Reducer

export default (state: TPTransactionLogState = initialState, action): TPTransactionLogState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TPTRANSACTIONLOG_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TPTRANSACTIONLOG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_TPTRANSACTIONLOG):
    case REQUEST(ACTION_TYPES.UPDATE_TPTRANSACTIONLOG):
    case REQUEST(ACTION_TYPES.DELETE_TPTRANSACTIONLOG):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_TPTRANSACTIONLOG_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TPTRANSACTIONLOG):
    case FAILURE(ACTION_TYPES.CREATE_TPTRANSACTIONLOG):
    case FAILURE(ACTION_TYPES.UPDATE_TPTRANSACTIONLOG):
    case FAILURE(ACTION_TYPES.DELETE_TPTRANSACTIONLOG):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_TPTRANSACTIONLOG_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_TPTRANSACTIONLOG):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_TPTRANSACTIONLOG):
    case SUCCESS(ACTION_TYPES.UPDATE_TPTRANSACTIONLOG):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_TPTRANSACTIONLOG):
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

const apiUrl = 'api/tp-transaction-logs/';
const apiUrlTransaction = 'api/tp-transaction-logs/account/';
// Actions

export const getEntities: ICrudGetAllAction<ITPTransactionLog> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_TPTRANSACTIONLOG_LIST,
  payload: axios.get<ITPTransactionLog>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<ITPTransactionLog> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TPTRANSACTIONLOG,
    payload: axios.get<ITPTransactionLog>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ITPTransactionLog> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TPTRANSACTIONLOG,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITPTransactionLog> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TPTRANSACTIONLOG,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITPTransactionLog> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TPTRANSACTIONLOG,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const getAccountTransactions: ICrudGetAction<ITPTransactionLog> = id => {
  const requestUrl = `${apiUrlTransaction}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TPTRANSACTIONLOG_LIST,
    payload: axios.get<ITPTransactionLog>(requestUrl),
  };
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
