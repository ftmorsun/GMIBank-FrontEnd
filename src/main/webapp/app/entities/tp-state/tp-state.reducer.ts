import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITPState, defaultValue } from 'app/shared/model/tp-state.model';

export const ACTION_TYPES = {
  FETCH_TPSTATE_LIST: 'tPState/FETCH_TPSTATE_LIST',
  FETCH_TPSTATE: 'tPState/FETCH_TPSTATE',
  CREATE_TPSTATE: 'tPState/CREATE_TPSTATE',
  UPDATE_TPSTATE: 'tPState/UPDATE_TPSTATE',
  DELETE_TPSTATE: 'tPState/DELETE_TPSTATE',
  RESET: 'tPState/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITPState>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type TPStateState = Readonly<typeof initialState>;

// Reducer

export default (state: TPStateState = initialState, action): TPStateState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TPSTATE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TPSTATE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_TPSTATE):
    case REQUEST(ACTION_TYPES.UPDATE_TPSTATE):
    case REQUEST(ACTION_TYPES.DELETE_TPSTATE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_TPSTATE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TPSTATE):
    case FAILURE(ACTION_TYPES.CREATE_TPSTATE):
    case FAILURE(ACTION_TYPES.UPDATE_TPSTATE):
    case FAILURE(ACTION_TYPES.DELETE_TPSTATE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_TPSTATE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_TPSTATE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_TPSTATE):
    case SUCCESS(ACTION_TYPES.UPDATE_TPSTATE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_TPSTATE):
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

const apiUrl = 'api/tp-states';

// Actions

export const getEntities: ICrudGetAllAction<ITPState> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_TPSTATE_LIST,
  payload: axios.get<ITPState>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<ITPState> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TPSTATE,
    payload: axios.get<ITPState>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ITPState> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TPSTATE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITPState> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TPSTATE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITPState> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TPSTATE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
