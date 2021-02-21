import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import TPTransactionLogUpdatePage from './tp-transaction-log-update.page-object';

const expect = chai.expect;
export class TPTransactionLogDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('gmibankfrontendApp.tPTransactionLog.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-tPTransactionLog'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class TPTransactionLogComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('tp-transaction-log-heading'));
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
    await navBarPage.getEntityPage('tp-transaction-log');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateTPTransactionLog() {
    await this.createButton.click();
    return new TPTransactionLogUpdatePage();
  }

  async deleteTPTransactionLog() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const tPTransactionLogDeleteDialog = new TPTransactionLogDeleteDialog();
    await waitUntilDisplayed(tPTransactionLogDeleteDialog.deleteModal);
    expect(await tPTransactionLogDeleteDialog.getDialogTitle().getAttribute('id')).to.match(
      /gmibankfrontendApp.tPTransactionLog.delete.question/
    );
    await tPTransactionLogDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(tPTransactionLogDeleteDialog.deleteModal);

    expect(await isVisible(tPTransactionLogDeleteDialog.deleteModal)).to.be.false;
  }
}
