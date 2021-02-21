import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import TPAccountRegistrationUpdatePage from './tp-account-registration-update.page-object';

const expect = chai.expect;
export class TPAccountRegistrationDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('gmibankfrontendApp.tPAccountRegistration.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-tPAccountRegistration'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class TPAccountRegistrationComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('tp-account-registration-heading'));
  noRecords: ElementFinder = element(by.css('#app-view-container .table-responsive div.alert.alert-warning'));
  table: ElementFinder = element(by.css('#app-view-container div.table-responsive > table'));

  records: ElementArrayFinder = this.table.all(by.css('tbody tr'));

  getDetailsButton(record: ElementFinder) {
    return record.element(by.css('a.btn.btn-info.btn-sm'));
  }

  getEditButton(record: ElementFinder) {
    return record.element(by.css('a.btn.btn-primary.btn-sm'));
  }

  getDeleteButton(record: ElementFinder) {
    return record.element(by.css('a.btn.btn-danger.btn-sm'));
  }

  async goToPage(navBarPage: NavBarPage) {
    await navBarPage.getEntityPage('tp-account-registration');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateTPAccountRegistration() {
    await this.createButton.click();
    return new TPAccountRegistrationUpdatePage();
  }

  async deleteTPAccountRegistration() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const tPAccountRegistrationDeleteDialog = new TPAccountRegistrationDeleteDialog();
    await waitUntilDisplayed(tPAccountRegistrationDeleteDialog.deleteModal);
    expect(await tPAccountRegistrationDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /gmibankfrontendApp.tPAccountRegistration.delete.question/
    );
    await tPAccountRegistrationDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(tPAccountRegistrationDeleteDialog.deleteModal);

    expect(await isVisible(tPAccountRegistrationDeleteDialog.deleteModal)).to.be.false;
  }
}
