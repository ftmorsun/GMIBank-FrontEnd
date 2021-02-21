import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import locale, { LocaleState } from './locale';
import authentication, { AuthenticationState } from './authentication';
import applicationProfile, { ApplicationProfileState } from './application-profile';

import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
import register, { RegisterState } from 'app/modules/account/register/register.reducer';
import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
import password, { PasswordState } from 'app/modules/account/password/password.reducer';
import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
// prettier-ignore
import tPState, {
  TPStateState
} from 'app/entities/tp-state/tp-state.reducer';
// prettier-ignore
import tPCountry, {
  TPCountryState
} from 'app/entities/tp-country/tp-country.reducer';
// prettier-ignore
import tPCustomer, {
  TPCustomerState
} from 'app/entities/tp-customer/tp-customer.reducer';
// prettier-ignore
import tPEmployee, {
  TPEmployeeState
} from 'app/entities/tp-employee/tp-employee.reducer';
// prettier-ignore
import tPTransactionLog, {
  TPTransactionLogState
} from 'app/entities/tp-transaction-log/tp-transaction-log.reducer';
// prettier-ignore
import tPAccount, {
  TPAccountState
} from 'app/entities/tp-account/tp-account.reducer';

import tPCustomerAccount, { TPCustomerAccountState } from 'app/customer-comp/tp-customer-account/tp-customer-accounts.reducer';

import tPAccountRegistration, { TPAccountRegistrationState } from 'app/entities/tp-customer/tp-account-registration-reducer';

export interface IRootState {
  readonly authentication: AuthenticationState;
  readonly locale: LocaleState;
  readonly applicationProfile: ApplicationProfileState;
  readonly administration: AdministrationState;
  readonly userManagement: UserManagementState;
  readonly register: RegisterState;
  readonly activate: ActivateState;
  readonly passwordReset: PasswordResetState;
  readonly password: PasswordState;
  readonly settings: SettingsState;
  readonly tPState: TPStateState;
  readonly tPCountry: TPCountryState;
  readonly tPCustomer: TPCustomerState;
  readonly tPEmployee: TPEmployeeState;
  readonly tPTransactionLog: TPTransactionLogState;
  readonly tPAccount: TPAccountState;
  readonly tPCustomerAccount: TPCustomerAccountState;
  readonly tPAccountRegistration: TPAccountRegistrationState;
  /* jhipster-needle-add-reducer-type - JHipster will add reducer type here */
  readonly loadingBar: any;
}

const rootReducer = combineReducers<IRootState>({
  authentication,
  locale,
  applicationProfile,
  administration,
  userManagement,
  register,
  activate,
  passwordReset,
  password,
  settings,
  tPState,
  tPCountry,
  tPCustomer,
  tPEmployee,
  tPTransactionLog,
  tPAccount,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  loadingBar,
  tPCustomerAccount,
  tPAccountRegistration,
});

export default rootReducer;
