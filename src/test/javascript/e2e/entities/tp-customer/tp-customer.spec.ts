import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TPCustomerComponentsPage from './tp-customer.page-object';
import TPCustomerUpdatePage from './tp-customer-update.page-object';
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

describe('TPCustomer e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let tPCustomerComponentsPage: TPCustomerComponentsPage;
  let tPCustomerUpdatePage: TPCustomerUpdatePage;

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
    tPCustomerComponentsPage = new TPCustomerComponentsPage();
    tPCustomerComponentsPage = await tPCustomerComponentsPage.goToPage(navBarPage);
  });

  it('should load TPCustomers', async () => {
    expect(await tPCustomerComponentsPage.title.getText()).to.match(/TP Customers/);
    expect(await tPCustomerComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete TPCustomers', async () => {
    const beforeRecordsCount = (await isVisible(tPCustomerComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(tPCustomerComponentsPage.table);
    tPCustomerUpdatePage = await tPCustomerComponentsPage.goToCreateTPCustomer();
    await tPCustomerUpdatePage.enterData();

    expect(await tPCustomerComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(tPCustomerComponentsPage.table);
    await waitUntilCount(tPCustomerComponentsPage.records, beforeRecordsCount + 1);
    expect(await tPCustomerComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await tPCustomerComponentsPage.deleteTPCustomer();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(tPCustomerComponentsPage.records, beforeRecordsCount);
      expect(await tPCustomerComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(tPCustomerComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
