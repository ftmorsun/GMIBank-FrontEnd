import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TPStateComponentsPage from './tp-state.page-object';
import TPStateUpdatePage from './tp-state-update.page-object';
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

describe('TPState e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let tPStateComponentsPage: TPStateComponentsPage;
  let tPStateUpdatePage: TPStateUpdatePage;

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
    tPStateComponentsPage = new TPStateComponentsPage();
    tPStateComponentsPage = await tPStateComponentsPage.goToPage(navBarPage);
  });

  it('should load TPStates', async () => {
    expect(await tPStateComponentsPage.title.getText()).to.match(/TP States/);
    expect(await tPStateComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete TPStates', async () => {
    const beforeRecordsCount = (await isVisible(tPStateComponentsPage.noRecords)) ? 0 : await getRecordsCount(tPStateComponentsPage.table);
    tPStateUpdatePage = await tPStateComponentsPage.goToCreateTPState();
    await tPStateUpdatePage.enterData();

    expect(await tPStateComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(tPStateComponentsPage.table);
    await waitUntilCount(tPStateComponentsPage.records, beforeRecordsCount + 1);
    expect(await tPStateComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await tPStateComponentsPage.deleteTPState();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(tPStateComponentsPage.records, beforeRecordsCount);
      expect(await tPStateComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(tPStateComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
