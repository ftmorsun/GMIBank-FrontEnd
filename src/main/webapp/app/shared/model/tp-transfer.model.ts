import { Moment } from 'moment';

export interface ITPTransfer {
  fromAccountId?: number;
  toAccountId?: number;
  balance?: number;
  userId?: number;
  description?: string;
}
