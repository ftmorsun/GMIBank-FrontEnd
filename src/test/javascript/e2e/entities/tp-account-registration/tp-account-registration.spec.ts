import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TPAccountRegistrationComponentsPage from './tp-account-registration.page-object';
import TPAccountRegistrationUpdatePage from './tp-account-registration-update.page-object';
import {
  waitUntilDisplayed,
  waitUntilAnyDisplayed,
  click,
  getRecordsCount,
  waitUntilHidden,
  waitUntilCount,
  isVisible,
} from '../../util/utils';

const expect = chai.expect;

describe('TPAccountRegistration e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let tPAccountRegistrationComponentsPage: TPAccountRegistrationComponentsPage;
  let tPAccountRegistrationUpdatePage: TPAccountRegistrationUpdatePage;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.waitUntilDisplayed();

    await signInPage.username.sendKeys('admin');
    await signInPage.password.sendKeys('admin');
    await signInPage.loginButton.click();
    await signInPage.waitUntilHidden();
    await waitUntilDisplayed(navBarPage.entityMenu);
    await waitUntilDisplayed(navBarPage.adminMenu);
    await waitUntilDisplayed(navBarPage.accountMenu);
  });

  beforeEach(async () => {
    await browser.get('/');
    await waitUntilDisplayed(navBarPage.entityMenu);
    tPAccountRegistrationComponentsPage = new TPAccountRegistrationComponentsPage();
    tPAccountRegistrationComponentsPage = await tPAccountRegistrationComponentsPage.goToPage(navBarPage);
  });

  it('should load TPAccountRegistrations', async () => {
    expect(await tPAccountRegistrationComponentsPage.title.getText()).to.match(/TP Account Registrations/);
    expect(await tPAccountRegistrationComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete TPAccountRegistrations', async () => {
    const beforeRecordsCount = (await isVisible(tPAccountRegistrationComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(tPAccountRegistrationComponentsPage.table);
    tPAccountRegistrationUpdatePage = await tPAccountRegistrationComponentsPage.goToCreateTPAccountRegistration();
    await tPAccountRegistrationUpdatePage.enterData();

    expect(await tPAccountRegistrationComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(tPAccountRegistrationComponentsPage.table);
    await waitUntilCount(tPAccountRegistrationComponentsPage.records, beforeRecordsCount + 1);
    expect(await tPAccountRegistrationComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await tPAccountRegistrationComponentsPage.deleteTPAccountRegistration();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(tPAccountRegistrationComponentsPage.records, beforeRecordsCount);
      expect(await tPAccountRegistrationComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(tPAccountRegistrationComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
