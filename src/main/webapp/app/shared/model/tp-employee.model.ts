import { Moment } from 'moment';
import { ITPCountry } from 'app/shared/model/tp-country.model';
import { ITPState } from 'app/shared/model/tp-state.model';
import { IUser } from 'app/shared/model/user.model';

export interface ITPEmployee {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  hireDate?: string;
  mobilePhoneNumber?: string;
  phoneNumber?: string;
  zipCode?: string;
  address?: string;
  city?: string;
  ssn?: string;
  createDate?: string;
  country?: ITPCountry;
  state?: string;
  user?: IUser;
  manager?: ITPEmployee;
}

export const defaultValue: Readonly<ITPEmployee> = {};
