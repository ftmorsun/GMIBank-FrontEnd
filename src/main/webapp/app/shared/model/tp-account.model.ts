import { Moment } from 'moment';
import { ITPEmployee } from 'app/shared/model/tp-employee.model';
import { ITPTransactionLog } from 'app/shared/model/tp-transaction-log.model';
import { ITPCustomer } from 'app/shared/model/tp-customer.model';
import { TPAccountType } from 'app/shared/model/enumerations/tp-account-type.model';
import { TPAccountStatusType } from 'app/shared/model/enumerations/tp-account-status-type.model';

export interface ITPAccount {
  id?: number;
  description?: string;
  balance?: number;
  accountType?: TPAccountType;
  accountStatusType?: TPAccountStatusType;
  createDate?: string;
  closedDate?: string;
  employee?: ITPEmployee;
  accountlogs?: ITPTransactionLog[];
  tpcustomers?: ITPCustomer[];
}

export const defaultValue: Readonly<ITPAccount> = {};
