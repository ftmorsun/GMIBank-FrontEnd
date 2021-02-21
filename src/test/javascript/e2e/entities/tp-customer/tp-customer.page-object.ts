import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import TPCustomerUpdatePage from './tp-customer-update.page-object';

const expect = chai.expect;
export class TPCustomerDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('gmibankfrontendApp.tPCustomer.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-tPCustomer'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class TPCustomerComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('tp-customer-heading'));
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
    await navBarPage.getEntityPage('tp-customer');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateTPCustomer() {
    await this.createButton.click();
    return new TPCustomerUpdatePage();
  }

  async deleteTPCustomer() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const tPCustomerDeleteDialog = new TPCustomerDeleteDialog();
    await waitUntilDisplayed(tPCustomerDeleteDialog.deleteModal);
    expect(await tPCustomerDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/gmibankfrontendApp.tPCustomer.delete.question/);
    await tPCustomerDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(tPCustomerDeleteDialog.deleteModal);

    expect(await isVisible(tPCustomerDeleteDialog.deleteModal)).to.be.false;
  }
}
