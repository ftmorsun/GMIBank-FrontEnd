import { element, by, ElementFinder, protractor } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class TPEmployeeUpdatePage {
  pageTitle: ElementFinder = element(by.id('gmibankfrontendApp.tPEmployee.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  firstNameInput: ElementFinder = element(by.css('input#tp-employee-firstName'));
  lastNameInput: ElementFinder = element(by.css('input#tp-employee-lastName'));
  emailInput: ElementFinder = element(by.css('input#tp-employee-email'));
  hireDateInput: ElementFinder = element(by.css('input#tp-employee-hireDate'));
  mobilePhoneNumberInput: ElementFinder = element(by.css('input#tp-employee-mobilePhoneNumber'));
  phoneNumberInput: ElementFinder = element(by.css('input#tp-employee-phoneNumber'));
  zipCodeInput: ElementFinder = element(by.css('input#tp-employee-zipCode'));
  addressInput: ElementFinder = element(by.css('input#tp-employee-address'));
  cityInput: ElementFinder = element(by.css('input#tp-employee-city'));
  ssnInput: ElementFinder = element(by.css('input#tp-employee-ssn'));
  createDateInput: ElementFinder = element(by.css('input#tp-employee-createDate'));
  countrySelect: ElementFinder = element(by.css('select#tp-employee-country'));
  stateSelect: ElementFinder = element(by.css('select#tp-employee-state'));
  userSelect: ElementFinder = element(by.css('select#tp-employee-user'));
  managerSelect: ElementFinder = element(by.css('select#tp-employee-manager'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setFirstNameInput(firstName) {
    await this.firstNameInput.sendKeys(firstName);
  }

  async getFirstNameInput() {
    return this.firstNameInput.getAttribute('value');
  }

  async setLastNameInput(lastName) {
    await this.lastNameInput.sendKeys(lastName);
  }

  async getLastNameInput() {
    return this.lastNameInput.getAttribute('value');
  }

  async setEmailInput(email) {
    await this.emailInput.sendKeys(email);
  }

  async getEmailInput() {
    return this.emailInput.getAttribute('value');
  }

  async setHireDateInput(hireDate) {
    await this.hireDateInput.sendKeys(hireDate);
  }

  async getHireDateInput() {
    return this.hireDateInput.getAttribute('value');
  }

  async setMobilePhoneNumberInput(mobilePhoneNumber) {
    await this.mobilePhoneNumberInput.sendKeys(mobilePhoneNumber);
  }

  async getMobilePhoneNumberInput() {
    return this.mobilePhoneNumberInput.getAttribute('value');
  }

  async setPhoneNumberInput(phoneNumber) {
    await this.phoneNumberInput.sendKeys(phoneNumber);
  }

  async getPhoneNumberInput() {
    return this.phoneNumberInput.getAttribute('value');
  }

  async setZipCodeInput(zipCode) {
    await this.zipCodeInput.sendKeys(zipCode);
  }

  async getZipCodeInput() {
    return this.zipCodeInput.getAttribute('value');
  }

  async setAddressInput(address) {
    await this.addressInput.sendKeys(address);
  }

  async getAddressInput() {
    return this.addressInput.getAttribute('value');
  }

  async setCityInput(city) {
    await this.cityInput.sendKeys(city);
  }

  async getCityInput() {
    return this.cityInput.getAttribute('value');
  }

  async setSsnInput(ssn) {
    await this.ssnInput.sendKeys(ssn);
  }

  async getSsnInput() {
    return this.ssnInput.getAttribute('value');
  }

  async setCreateDateInput(createDate) {
    await this.createDateInput.sendKeys(createDate);
  }

  async getCreateDateInput() {
    return this.createDateInput.getAttribute('value');
  }

  async countrySelectLastOption() {
    await this.countrySelect.all(by.tagName('option')).last().click();
  }

  async countrySelectOption(option) {
    await this.countrySelect.sendKeys(option);
  }

  getCountrySelect() {
    return this.countrySelect;
  }

  async getCountrySelectedOption() {
    return this.countrySelect.element(by.css('option:checked')).getText();
  }

  async stateSelectLastOption() {
    await this.stateSelect.all(by.tagName('option')).last().click();
  }

  async stateSelectOption(option) {
    await this.stateSelect.sendKeys(option);
  }

  getStateSelect() {
    return this.stateSelect;
  }

  async getStateSelectedOption() {
    return this.stateSelect.element(by.css('option:checked')).getText();
  }

  async userSelectLastOption() {
    await this.userSelect.all(by.tagName('option')).last().click();
  }

  async userSelectOption(option) {
    await this.userSelect.sendKeys(option);
  }

  getUserSelect() {
    return this.userSelect;
  }

  async getUserSelectedOption() {
    return this.userSelect.element(by.css('option:checked')).getText();
  }

  async managerSelectLastOption() {
    await this.managerSelect.all(by.tagName('option')).last().click();
  }

  async managerSelectOption(option) {
    await this.managerSelect.sendKeys(option);
  }

  getManagerSelect() {
    return this.managerSelect;
  }

  async getManagerSelectedOption() {
    return this.managerSelect.element(by.css('option:checked')).getText();
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
    await this.setFirstNameInput('firstName');
    expect(await this.getFirstNameInput()).to.match(/firstName/);
    await waitUntilDisplayed(this.saveButton);
    await this.setLastNameInput('lastName');
    expect(await this.getLastNameInput()).to.match(/lastName/);
    await waitUntilDisplayed(this.saveButton);
    await this.setEmailInput('email');
    expect(await this.getEmailInput()).to.match(/email/);
    await waitUntilDisplayed(this.saveButton);
    await this.setHireDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await this.getHireDateInput()).to.contain('2001-01-01T02:30');
    await waitUntilDisplayed(this.saveButton);
    await this.setMobilePhoneNumberInput('mobilePhoneNumber');
    expect(await this.getMobilePhoneNumberInput()).to.match(/mobilePhoneNumber/);
    await waitUntilDisplayed(this.saveButton);
    await this.setPhoneNumberInput('phoneNumber');
    expect(await this.getPhoneNumberInput()).to.match(/phoneNumber/);
    await waitUntilDisplayed(this.saveButton);
    await this.setZipCodeInput('zipCode');
    expect(await this.getZipCodeInput()).to.match(/zipCode/);
    await waitUntilDisplayed(this.saveButton);
    await this.setAddressInput('address');
    expect(await this.getAddressInput()).to.match(/address/);
    await waitUntilDisplayed(this.saveButton);
    await this.setCityInput('city');
    expect(await this.getCityInput()).to.match(/city/);
    await waitUntilDisplayed(this.saveButton);
    await this.setSsnInput('ssn');
    expect(await this.getSsnInput()).to.match(/ssn/);
    await waitUntilDisplayed(this.saveButton);
    await this.setCreateDateInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
    expect(await this.getCreateDateInput()).to.contain('2001-01-01T02:30');
    await this.countrySelectLastOption();
    await this.stateSelectLastOption();
    await this.userSelectLastOption();
    await this.managerSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
