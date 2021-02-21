import { Moment } from 'moment';

export interface ITPAccountRegistration {
  id?: number;
  ssn?: string;
  firstName?: string;
  lastName?: string;
  userId?: number;
  userName?: string;
  email?: string;
  mobilePhoneNumber?: string;
  address?: string;
  createDate?: string;
}

export const defaultValue: Readonly<ITPAccountRegistration> = {};
