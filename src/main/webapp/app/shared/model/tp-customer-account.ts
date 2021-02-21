import { Moment } from 'moment';
import { TPAccountType } from 'app/shared/model/enumerations/tp-account-type.model';
import { TPAccountStatusType } from 'app/shared/model/enumerations/tp-account-status-type.model';

export interface ITPCustomerAccount {
  id?: number;
  description?: string;
  balance?: number;
  accountType?: TPAccountType;
  accountStatusType?: TPAccountStatusType;
  createDate?: string;
}

export const defaultValue: Readonly<ITPCustomerAccount> = {};
