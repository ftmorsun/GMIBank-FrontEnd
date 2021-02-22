import { element, by, ElementFinder, protractor } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class TPAccountUpdatePage {
  pageTitle: ElementFinder = element(by.id('gmibankfrontendApp.tPAccount.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  descriptionInput: ElementFinder = element(by.css('input#tp-account-description'));
  balanceInput: ElementFinder = element(by.css('input#tp-account-balance'));
  accountTypeSelect: ElementFinder = element(by.css('select#tp-account-accountType'));
  accountStatusTypeSelect: ElementFinder = element(by.css('select#tp-account-accountStatusType'));
  createDateInput: ElementFinder = element(by.css('input#tp-account-createDate'));
  closedDateInput: ElementFinder = element(by.css('input#tp-account-closedDate'));
  employeeSelect: ElementFinder = element(by.css('select#tp-account-employee'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setDescriptionInput(description) {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput() {
    return this.descriptionInput.getAttribute('value');
  }

  async setBalanceInput(balance) {
    await this.balanceInput.sendKeys(balance);
  }

  async getBalanceInput() {
    return this.balanceInput.getAttribute('value');
  }

  async setAccountTypeSelect(accountType) {
    await this.accountTypeSelect.sendKeys(accountType);
  }

  async getAccountTypeSelect() {
    return this.accountTypeSelect.element(by.css('option:checked')).getText();
  }

  async accountTypeSelectLastOption() {
    await this.accountTypeSelect.all(by.tagName('option')).last().click();
  }
  async setAccountStatusTypeSelect(accountStatusType) {
    await this.accountStatusTypeSelect.sendKeys(accountStatusType);
  }

  async getAccountStatusTypeSelect() {
    return this.accountStatusTypeSelect.element(by.css('option:checked')).getText();
  }

  async accountStatusTypeSelectLastOption() {
    await this.accountStatusTypeSelect.all(by.tagName('option')).last().click();
  }
  async setCreateDateInput(createDate) {
    await this.createDateInput.sendKeys(createDate);
  }

  async getCreateDateInput() {
    return this.createDateInput.getAttribute('value');
  }

  async setClosedDateInput(closedDate) {
    await this.closedDateInput.sendKeys(closedDate);
  }

  async getClosedDateInput() {
    return this.closedDateInput.getAttribute('value');
  }

  async employeeSelectLastOption() {
    await this.employeeSelect.all(by.tagName('option')).last().click();
  }

  async employeeSelectOption(option) {
    await this.employeeSelect.sendKeys(option);
  }

  getEmployeeSelect() {
    return this.employeeSelect;
  }

  async getEmployeeSelectedOption() {
    return this.employeeSelect.element(by.css('option:checked')).getText();
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }

  async enterData() {
    await waitUntilDisplayed(this.saveButton);
    await this.setDescriptionInput('description');
    expect(await this.getDescriptionInput()).to.match(/description/);
    await waitUntilDisplayed(this.saveButton);
    await this.setBalanceInput('5');
    expect(await this.getBalanceInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    await this.accountTypeSelectLastOption();
    await waitUntilDisplayed(this.saveButton);
    await this.accountStatusTypeSelectLastOption();
    await waitUntilDisplayed(this.saveButton);
    await this.setCreateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await this.getCreateDateInput()).to.contain('2001-01-01T02:30');
    await waitUntilDisplayed(this.saveButton);
    await this.setClosedDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await this.getClosedDateInput()).to.contain('2001-01-01T02:30');
    await this.employeeSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
