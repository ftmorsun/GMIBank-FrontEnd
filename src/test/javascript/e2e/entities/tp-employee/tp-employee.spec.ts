import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TPEmployeeComponentsPage from './tp-employee.page-object';
import TPEmployeeUpdatePage from './tp-employee-update.page-object';
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

describe('TPEmployee e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let tPEmployeeComponentsPage: TPEmployeeComponentsPage;
  let tPEmployeeUpdatePage: TPEmployeeUpdatePage;

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
    tPEmployeeComponentsPage = new TPEmployeeComponentsPage();
    tPEmployeeComponentsPage = await tPEmployeeComponentsPage.goToPage(navBarPage);
  });

  it('should load TPEmployees', async () => {
    expect(await tPEmployeeComponentsPage.title.getText()).to.match(/TP Employees/);
    expect(await tPEmployeeComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete TPEmployees', async () => {
    const beforeRecordsCount = (await isVisible(tPEmployeeComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(tPEmployeeComponentsPage.table);
    tPEmployeeUpdatePage = await tPEmployeeComponentsPage.goToCreateTPEmployee();
    await tPEmployeeUpdatePage.enterData();

    expect(await tPEmployeeComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(tPEmployeeComponentsPage.table);
    await waitUntilCount(tPEmployeeComponentsPage.records, beforeRecordsCount + 1);
    expect(await tPEmployeeComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await tPEmployeeComponentsPage.deleteTPEmployee();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(tPEmployeeComponentsPage.records, beforeRecordsCount);
      expect(await tPEmployeeComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(tPEmployeeComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
