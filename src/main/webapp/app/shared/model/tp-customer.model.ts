import { Moment } from 'moment';
import { ITPCountry } from 'app/shared/model/tp-country.model';
import { ITPState } from 'app/shared/model/tp-state.model';
import { IUser } from 'app/shared/model/user.model';
import { ITPAccount } from 'app/shared/model/tp-account.model';

export interface ITPCustomer {
  id?: number;
  firstName?: string;
  lastName?: string;
  middleInitial?: string;
  email?: string;
  mobilePhoneNumber?: string;
  phoneNumber?: string;
  zipCode?: string;
  address?: string;
  city?: string;
  ssn?: string;
  createDate?: string;
  zelleEnrolled?: boolean;
  country?: ITPCountry;
  state?: string;
  user?: IUser;
  accounts?: ITPAccount[];
}

export const defaultValue: Readonly<ITPCustomer> = {
  zelleEnrolled: false,
};
