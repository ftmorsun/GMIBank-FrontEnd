import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';

import { waitUntilAnyDisplayed, waitUntilDisplayed, click, waitUntilHidden, isVisible } from '../../util/utils';

import NavBarPage from './../../page-objects/navbar-page';

import TPEmployeeUpdatePage from './tp-employee-update.page-object';

const expect = chai.expect;
export class TPEmployeeDeleteDialog {
  deleteModal = element(by.className('modal'));
  private dialogTitle: ElementFinder = element(by.id('gmibankfrontendApp.tPEmployee.delete.question'));
  private confirmButton = element(by.id('jhi-confirm-delete-tPEmployee'));

  getDialogTitle() {
    return this.dialogTitle;
  }

  async clickOnConfirmButton() {
    await this.confirmButton.click();
  }
}

export default class TPEmployeeComponentsPage {
  createButton: ElementFinder = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('div table .btn-danger'));
  title: ElementFinder = element(by.id('tp-employee-heading'));
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
    await navBarPage.getEntityPage('tp-employee');
    await waitUntilAnyDisplayed([this.noRecords, this.table]);
    return this;
  }

  async goToCreateTPEmployee() {
    await this.createButton.click();
    return new TPEmployeeUpdatePage();
  }

  async deleteTPEmployee() {
    const deleteButton = this.getDeleteButton(this.records.last());
    await click(deleteButton);

    const tPEmployeeDeleteDialog = new TPEmployeeDeleteDialog();
    await waitUntilDisplayed(tPEmployeeDeleteDialog.deleteModal);
    expect(await tPEmployeeDeleteDialog.getDialogTitle().getAttribute('id')).to.match(/gmibankfrontendApp.tPEmployee.delete.question/);
    await tPEmployeeDeleteDialog.clickOnConfirmButton();

    await waitUntilHidden(tPEmployeeDeleteDialog.deleteModal);

    expect(await isVisible(tPEmployeeDeleteDialog.deleteModal)).to.be.false;
  }
}
