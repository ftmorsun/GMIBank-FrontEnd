import { element, by, ElementFinder, protractor } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class TPCustomerUpdatePage {
  pageTitle: ElementFinder = element(by.id('gmibankfrontendApp.tPCustomer.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  firstNameInput: ElementFinder = element(by.css('input#tp-customer-firstName'));
  lastNameInput: ElementFinder = element(by.css('input#tp-customer-lastName'));
  middleInitialInput: ElementFinder = element(by.css('input#tp-customer-middleInitial'));
  emailInput: ElementFinder = element(by.css('input#tp-customer-email'));
  mobilePhoneNumberInput: ElementFinder = element(by.css('input#tp-customer-mobilePhoneNumber'));
  phoneNumberInput: ElementFinder = element(by.css('input#tp-customer-phoneNumber'));
  zipCodeInput: ElementFinder = element(by.css('input#tp-customer-zipCode'));
  addressInput: ElementFinder = element(by.css('input#tp-customer-address'));
  cityInput: ElementFinder = element(by.css('input#tp-customer-city'));
  ssnInput: ElementFinder = element(by.css('input#tp-customer-ssn'));
  createDateInput: ElementFinder = element(by.css('input#tp-customer-createDate'));
  zelleEnrolledInput: ElementFinder = element(by.css('input#tp-customer-zelleEnrolled'));
  countrySelect: ElementFinder = element(by.css('select#tp-customer-country'));
  stateSelect: ElementFinder = element(by.css('select#tp-customer-state'));
  userSelect: ElementFinder = element(by.css('select#tp-customer-user'));
  accountSelect: ElementFinder = element(by.css('select#tp-customer-account'));

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

  async setMiddleInitialInput(middleInitial) {
    await this.middleInitialInput.sendKeys(middleInitial);
  }

  async getMiddleInitialInput() {
    return this.middleInitialInput.getAttribute('value');
  }

  async setEmailInput(email) {
    await this.emailInput.sendKeys(email);
  }

  async getEmailInput() {
    return this.emailInput.getAttribute('value');
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

  getZelleEnrolledInput() {
    return this.zelleEnrolledInput;
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

  async accountSelectLastOption() {
    await this.accountSelect.all(by.tagName('option')).last().click();
  }

  async accountSelectOption(option) {
    await this.accountSelect.sendKeys(option);
  }

  getAccountSelect() {
    return this.accountSelect;
  }

  async getAccountSelectedOption() {
    return this.accountSelect.element(by.css('option:checked')).getText();
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
    await this.setMiddleInitialInput('middleInitial');
    expect(await this.getMiddleInitialInput()).to.match(/middleInitial/);
    await waitUntilDisplayed(this.saveButton);
    await this.setEmailInput('email');
    expect(await this.getEmailInput()).to.match(/email/);
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
    await waitUntilDisplayed(this.saveButton);
    const selectedZelleEnrolled = await this.getZelleEnrolledInput().isSelected();
    if (selectedZelleEnrolled) {
      await this.getZelleEnrolledInput().click();
      expect(await this.getZelleEnrolledInput().isSelected()).to.be.false;
    } else {
      await this.getZelleEnrolledInput().click();
      expect(await this.getZelleEnrolledInput().isSelected()).to.be.true;
    }
    await this.countrySelectLastOption();
    await this.stateSelectLastOption();
    await this.userSelectLastOption();
    // this.accountSelectLastOption();
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
