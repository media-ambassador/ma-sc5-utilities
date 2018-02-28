import { browser, by, element, ElementFinder } from 'protractor';

export class RemindPage {
  navigateTo() {
    return browser.get('/app/remind');
  }

  getForm(): ElementFinder {
    return element(by.css('app-remind-password form[data-el-e2e="form"]'))
  }

  getFormLoginField(): ElementFinder {
    return element(by.css('app-remind-password form [data-el-e2e="fieldLogin"]'))
  }

  submitForm(): void {
    var btn = element(by.css('app-remind-password form [data-el-e2e="submitButton"]'));
    btn.click();
  }

}