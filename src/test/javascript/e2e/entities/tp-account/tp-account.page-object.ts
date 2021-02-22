import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import TPAccountUpdatePage from './tp-account-update.page-object';

const expect = chai.expect;
export class TPAccountDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('gmibankfrontendApp.tPAccount.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-tPAccount'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class TPAccountComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('tp-account-heading'));
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
    await navBarPage.getEntityPage('tp-account');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateTPAccount() {
    await this.createButton.click();
    return new TPAccountUpdatePage();
  }

  async deleteTPAccount() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const tPAccountDeleteDialog = new TPAccountDeleteDialog();
    await waitUntilDisplayed(tPAccountDeleteDialog.deleteModal);
    expect(await tPAccountDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/gmibankfrontendApp.tPAccount.delete.question/);
    await tPAccountDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(tPAccountDeleteDialog.deleteModal);

    expect(await isVisible(tPAccountDeleteDialog.deleteModal)).to.be.false;
  }
}
