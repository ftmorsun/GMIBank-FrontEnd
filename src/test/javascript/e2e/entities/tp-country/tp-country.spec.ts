import { browser, element, by } from 'protractor';

import NavBarPage from './../../page-objects/navbar-page';
import SignInPage from './../../page-objects/signin-page';
import TPCountryComponentsPage from './tp-country.page-object';
import TPCountryUpdatePage from './tp-country-update.page-object';
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

describe('TPCountry e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let tPCountryComponentsPage: TPCountryComponentsPage;
  let tPCountryUpdatePage: TPCountryUpdatePage;

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
    tPCountryComponentsPage = new TPCountryComponentsPage();
    tPCountryComponentsPage = await tPCountryComponentsPage.goToPage(navBarPage);
  });

  it('should load TPCountries', async () => {
    expect(await tPCountryComponentsPage.title.getText()).to.match(/TP Countries/);
    expect(await tPCountryComponentsPage.createButton.isEnabled()).to.be.true;
  });

  it('should create and delete TPCountries', async () => {
    const beforeRecordsCount = (await isVisible(tPCountryComponentsPage.noRecords))
      ? 0
      : await getRecordsCount(tPCountryComponentsPage.table);
    tPCountryUpdatePage = await tPCountryComponentsPage.goToCreateTPCountry();
    await tPCountryUpdatePage.enterData();

    expect(await tPCountryComponentsPage.createButton.isEnabled()).to.be.true;
    await waitUntilDisplayed(tPCountryComponentsPage.table);
    await waitUntilCount(tPCountryComponentsPage.records, beforeRecordsCount + 1);
    expect(await tPCountryComponentsPage.records.count()).to.eq(beforeRecordsCount + 1);

    await tPCountryComponentsPage.deleteTPCountry();
    if (beforeRecordsCount !== 0) {
      await waitUntilCount(tPCountryComponentsPage.records, beforeRecordsCount);
      expect(await tPCountryComponentsPage.records.count()).to.eq(beforeRecordsCount);
    } else {
      await waitUntilDisplayed(tPCountryComponentsPage.noRecords);
    }
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
