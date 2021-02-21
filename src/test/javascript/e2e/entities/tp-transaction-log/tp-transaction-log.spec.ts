import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TPTransactionLogComponentsPage from './tp-transaction-log.page-object';
import TPTransactionLogUpdatePage from './tp-transaction-log-update.page-object';
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

describe('TPTransactionLog e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let tPTransactionLogComponentsPage: TPTransactionLogComponentsPage;
  let tPTransactionLogUpdatePage: TPTransactionLogUpdatePage;

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
    tPTransactionLogComponentsPage = new TPTransactionLogComponentsPage();
    tPTransactionLogComponentsPage = await tPTransactionLogComponentsPage.goToPage(navBarPage);
  });

  it('should load TPTransactionLogs', async () => {
    expect(await tPTransactionLogComponentsPage.title.getText()).to.match(/TP Transaction Logs/);
    expect(await tPTransactionLogComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete TPTransactionLogs', async () => {
    const beforeRecordsCount = (await isVisible(tPTransactionLogComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(tPTransactionLogComponentsPage.table);
    tPTransactionLogUpdatePage = await tPTransactionLogComponentsPage.goToCreateTPTransactionLog();
    await tPTransactionLogUpdatePage.enterData();

    expect(await tPTransactionLogComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(tPTransactionLogComponentsPage.table);
    await waitUntilCount(tPTransactionLogComponentsPage.records, beforeRecordsCount + 1);
    expect(await tPTransactionLogComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await tPTransactionLogComponentsPage.deleteTPTransactionLog();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(tPTransactionLogComponentsPage.records, beforeRecordsCount);
      expect(await tPTransactionLogComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(tPTransactionLogComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
