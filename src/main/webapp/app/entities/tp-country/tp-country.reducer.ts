import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { ITPCountry, defaultValue } from 'app/shared/model/tp-country.model';

export const ACTION_TYPES = {
  FETCH_TPCOUNTRY_LIST: 'tPCountry/FETCH_TPCOUNTRY_LIST',
  FETCH_TPCOUNTRY: 'tPCountry/FETCH_TPCOUNTRY',
  CREATE_TPCOUNTRY: 'tPCountry/CREATE_TPCOUNTRY',
  UPDATE_TPCOUNTRY: 'tPCountry/UPDATE_TPCOUNTRY',
  DELETE_TPCOUNTRY: 'tPCountry/DELETE_TPCOUNTRY',
  RESET: 'tPCountry/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<ITPCountry>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type TPCountryState = Readonly<typeof initialState>;

// Reducer

export default (state: TPCountryState = initialState, action): TPCountryState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_TPCOUNTRY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_TPCOUNTRY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_TPCOUNTRY):
    case REQUEST(ACTION_TYPES.UPDATE_TPCOUNTRY):
    case REQUEST(ACTION_TYPES.DELETE_TPCOUNTRY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_TPCOUNTRY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_TPCOUNTRY):
    case FAILURE(ACTION_TYPES.CREATE_TPCOUNTRY):
    case FAILURE(ACTION_TYPES.UPDATE_TPCOUNTRY):
    case FAILURE(ACTION_TYPES.DELETE_TPCOUNTRY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_TPCOUNTRY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_TPCOUNTRY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_TPCOUNTRY):
    case SUCCESS(ACTION_TYPES.UPDATE_TPCOUNTRY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_TPCOUNTRY):
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

const apiUrl = 'api/tp-countries';

// Actions

export const getEntities: ICrudGetAllAction<ITPCountry> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_TPCOUNTRY_LIST,
  payload: axios.get<ITPCountry>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<ITPCountry> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_TPCOUNTRY,
    payload: axios.get<ITPCountry>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<ITPCountry> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_TPCOUNTRY,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<ITPCountry> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_TPCOUNTRY,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<ITPCountry> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_TPCOUNTRY,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
