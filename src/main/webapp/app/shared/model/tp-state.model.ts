import { ITPCountry } from 'app/shared/model/tp-country.model';

export interface ITPState {
  id?: number;
  name?: string;
  tpcountry?: ITPCountry;
}

export const defaultValue: Readonly<ITPState> = {};
