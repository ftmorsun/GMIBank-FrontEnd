import { ITPState } from 'app/shared/model/tp-state.model';

export interface ITPCountry {
  id?: number;
  name?: string;
  states?: ITPState[];
}

export const defaultValue: Readonly<ITPCountry> = {};
