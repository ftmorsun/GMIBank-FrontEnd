import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITPEmployee, defaultValue } from 'app/shared/model/tp-employee.model';

export const ACTION_TYPES = {
  FETCH_TPEMPLOYEE_LIST: 'tPEmployee/FETCH_TPEMPLOYEE_LIST',
  FETCH_TPEMPLOYEE: 'tPEmployee/FETCH_TPEMPLOYEE',
  CREATE_TPEMPLOYEE: 'tPEmployee/CREATE_TPEMPLOYEE',
  UPDATE_TPEMPLOYEE: 'tPEmployee/UPDATE_TPEMPLOYEE',
  DELETE_TPEMPLOYEE: 'tPEmployee/DELETE_TPEMPLOYEE',
  RESET: 'tPEmployee/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITPEmployee>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type TPEmployeeState = Readonly<typeof initialState>;

// Reducer

export default (state: TPEmployeeState = initialState, action): TPEmployeeState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TPEMPLOYEE_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TPEMPLOYEE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_TPEMPLOYEE):
    case REQUEST(ACTION_TYPES.UPDATE_TPEMPLOYEE):
    case REQUEST(ACTION_TYPES.DELETE_TPEMPLOYEE):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_TPEMPLOYEE_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TPEMPLOYEE):
    case FAILURE(ACTION_TYPES.CREATE_TPEMPLOYEE):
    case FAILURE(ACTION_TYPES.UPDATE_TPEMPLOYEE):
    case FAILURE(ACTION_TYPES.DELETE_TPEMPLOYEE):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_TPEMPLOYEE_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_TPEMPLOYEE):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_TPEMPLOYEE):
    case SUCCESS(ACTION_TYPES.UPDATE_TPEMPLOYEE):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_TPEMPLOYEE):
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

const apiUrl = 'api/tp-employees';

// Actions

export const getEntities: ICrudGetAllAction<ITPEmployee> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_TPEMPLOYEE_LIST,
  payload: axios.get<ITPEmployee>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<ITPEmployee> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TPEMPLOYEE,
    payload: axios.get<ITPEmployee>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ITPEmployee> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TPEMPLOYEE,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITPEmployee> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TPEMPLOYEE,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITPEmployee> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TPEMPLOYEE,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
