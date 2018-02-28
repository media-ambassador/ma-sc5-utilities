import { browser, by, element } from 'protractor';
import { ElementFinder } from 'protractor/built/element';

export class LoginPage {
  navigateTo() {
    return browser.get('/authentication');
  }

  getForm(): ElementFinder {
    return element(by.css('app-login form[data-el-e2e="form"]'))
  }

  getFormError(): ElementFinder {
    let form = this.getForm();
    return form.element(by.css('app-login form [data-el-e2e="formError"]'));
  }

  getFormLoginField(): ElementFinder {
    return element(by.css('app-login form [data-el-e2e="fieldLogin"]'))
  }

  getFormPasswordField(): ElementFinder {
    return element(by.css('app-login form [data-el-e2e="fieldPassword"]'))
  }

  submitForm(): void {
    var btn = element(by.css('app-login form [data-el-e2e="submitButton"]'));
    btn.click();
  }

}
