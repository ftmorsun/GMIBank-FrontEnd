import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import TPStateUpdatePage from './tp-state-update.page-object';

const expect = chai.expect;
export class TPStateDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('gmibankfrontendApp.tPState.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-tPState'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class TPStateComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('tp-state-heading'));
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
    await navBarPage.getEntityPage('tp-state');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateTPState() {
    await this.createButton.click();
    return new TPStateUpdatePage();
  }

  async deleteTPState() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const tPStateDeleteDialog = new TPStateDeleteDialog();
    await waitUntilDisplayed(tPStateDeleteDialog.deleteModal);
    expect(await tPStateDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/gmibankfrontendApp.tPState.delete.question/);
    await tPStateDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(tPStateDeleteDialog.deleteModal);

    expect(await isVisible(tPStateDeleteDialog.deleteModal)).to.be.false;
  }
}
