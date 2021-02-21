import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TPAccountComponentsPage from './tp-account.page-object';
import TPAccountUpdatePage from './tp-account-update.page-object';
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

describe('TPAccount e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let tPAccountComponentsPage: TPAccountComponentsPage;
  let tPAccountUpdatePage: TPAccountUpdatePage;

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
    tPAccountComponentsPage = new TPAccountComponentsPage();
    tPAccountComponentsPage = await tPAccountComponentsPage.goToPage(navBarPage);
  });

  it('should load TPAccounts', async () => {
    expect(await tPAccountComponentsPage.title.getText()).to.match(/TP Accounts/);
    expect(await tPAccountComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete TPAccounts', async () => {
    const beforeRecordsCount = (await isVisible(tPAccountComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(tPAccountComponentsPage.table);
    tPAccountUpdatePage = await tPAccountComponentsPage.goToCreateTPAccount();
    await tPAccountUpdatePage.enterData();

    expect(await tPAccountComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(tPAccountComponentsPage.table);
    await waitUntilCount(tPAccountComponentsPage.records, beforeRecordsCount + 1);
    expect(await tPAccountComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await tPAccountComponentsPage.deleteTPAccount();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(tPAccountComponentsPage.records, beforeRecordsCount);
      expect(await tPAccountComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(tPAccountComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
