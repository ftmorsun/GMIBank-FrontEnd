import { element, by, ElementFinder, protractor } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class TPTransactionLogUpdatePage {
  pageTitle: ElementFinder = element(by.id('gmibankfrontendApp.tPTransactionLog.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  transactionDateInput: ElementFinder = element(by.css('input#tp-transaction-log-transactionDate'));
  transactionAmountInput: ElementFinder = element(by.css('input#tp-transaction-log-transactionAmount'));
  newBalanceInput: ElementFinder = element(by.css('input#tp-transaction-log-newBalance'));
  descriptionInput: ElementFinder = element(by.css('input#tp-transaction-log-description'));
  tPAccountSelect: ElementFinder = element(by.css('select#tp-transaction-log-tPAccount'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setTransactionDateInput(transactionDate) {
    await this.transactionDateInput.sendKeys(transactionDate);
  }

  async getTransactionDateInput() {
    return this.transactionDateInput.getAttribute('value');
  }

  async setTransactionAmountInput(transactionAmount) {
    await this.transactionAmountInput.sendKeys(transactionAmount);
  }

  async getTransactionAmountInput() {
    return this.transactionAmountInput.getAttribute('value');
  }

  async setNewBalanceInput(newBalance) {
    await this.newBalanceInput.sendKeys(newBalance);
  }

  async getNewBalanceInput() {
    return this.newBalanceInput.getAttribute('value');
  }

  async setDescriptionInput(description) {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput() {
    return this.descriptionInput.getAttribute('value');
  }

  async tPAccountSelectLastOption() {
    await this.tPAccountSelect.all(by.tagName('option')).last().click();
  }

  async tPAccountSelectOption(option) {
    await this.tPAccountSelect.sendKeys(option);
  }

  getTPAccountSelect() {
    return this.tPAccountSelect;
  }

  async getTPAccountSelectedOption() {
    return this.tPAccountSelect.element(by.css('option:checked')).getText();
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
    await this.setTransactionDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await this.getTransactionDateInput()).to.contain('2001-01-01T02:30');
    await waitUntilDisplayed(this.saveButton);
    await this.setTransactionAmountInput('5');
    expect(await this.getTransactionAmountInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setNewBalanceInput('5');
    expect(await this.getNewBalanceInput()).to.eq('5');
    await waitUntilDisplayed(this.saveButton);
    await this.setDescriptionInput('description');
    expect(await this.getDescriptionInput()).to.match(/description/);
    await this.tPAccountSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
