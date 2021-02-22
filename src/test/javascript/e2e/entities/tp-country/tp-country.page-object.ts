import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import TPCountryUpdatePage from './tp-country-update.page-object';

const expect = chai.expect;
export class TPCountryDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('gmibankfrontendApp.tPCountry.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-tPCountry'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class TPCountryComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('tp-country-heading'));
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
    await navBarPage.getEntityPage('tp-country');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateTPCountry() {
    await this.createButton.click();
    return new TPCountryUpdatePage();
  }

  async deleteTPCountry() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const tPCountryDeleteDialog = new TPCountryDeleteDialog();
    await waitUntilDisplayed(tPCountryDeleteDialog.deleteModal);
    expect(await tPCountryDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/gmibankfrontendApp.tPCountry.delete.question/);
    await tPCountryDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(tPCountryDeleteDialog.deleteModal);

    expect(await isVisible(tPCountryDeleteDialog.deleteModal)).to.be.false;
  }
}
