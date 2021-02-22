import { Moment } from 'moment';
import { ITPAccount } from 'app/shared/model/tp-account.model';

export interface ITPTransactionLog {
  id?: number;
  transactionDate?: string;
  transactionAmount?: number;
  newBalance?: number;
  description?: string;
  tPAccount?: ITPAccount;
}

export const defaultValue: Readonly<ITPTransactionLog> = {};
