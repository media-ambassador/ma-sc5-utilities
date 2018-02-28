import { element, by, browser } from 'protractor';
import { LoginPage } from './login.po';
import { Utils } from '../untils.po';

describe('Login', () => {
  let page: LoginPage;
  let utils: Utils

  let form, inputField, passwordField;
  
  beforeEach(() => {
    page = new LoginPage();
    utils = new Utils();

    form = page.getForm();
    inputField = page.getFormLoginField();
    passwordField = page.getFormPasswordField();

    page.navigateTo();
  });

  describe('Form not filled', () => {
    beforeEach(() => {
      page.submitForm();
    });

    it('Should be two errors', () => {
      let form = page.getForm();
      let errorCount = form.all(by.css('.mat-error')).count();
      expect(errorCount).toBe(2);
    });

    it('Should show login text error "To pole jest wymagane"', () => {
      let matLoginError = inputField.element(by.css('.mat-error'));
      expect(matLoginError.getText()).toBe('To pole jest wymagane');
    });

    it('Should show password text error "To pole jest wymagane"', () => {
      let matPasswordError = passwordField.element(by.css('.mat-error'));
      expect(matPasswordError.getText()).toBe('To pole jest wymagane');
    });
  });

  describe('Form filled with invalid data', () => {
    beforeEach(() => {
      utils.sendKeysToElementByCss(inputField, 'input', 'test@mediaambassador.com')
      utils.sendKeysToElementByCss(passwordField, 'input', 'enter123')
      page.submitForm();
    });

    it('Should be one error field', () => {
      let form = page.getForm();
      let errorCount = form.all(by.css('.mat-error')).count();
      expect(errorCount).toBe(1);
    });

    it('Should show form notification error with contain "Niepoprawny adres email lub hasło. Spróbuj jeszcze raz"', () => {
      let formError = page.getFormError();
      expect(formError.getText()).toContain('Niepoprawny adres email lub hasło. Spróbuj jeszcze raz');
    });
  });

  describe('Form filled with valid data', () => {
    beforeEach(() => {
      utils.sendKeysToElementByCss(inputField, 'input', 'login_access@starcommerce.io')
      utils.sendKeysToElementByCss(passwordField, 'input', 'superpass')
      page.submitForm();

      browser.ignoreSynchronization = true;
      browser.waitForAngular();
      browser.driver.sleep(350);
    });

    it('Should not be any error field', () => {
      let form = page.getForm();
      let errorCount = form.all(by.css('.mat-error')).count();
      expect(errorCount).toBe(0);
    });

    it('Should show notification success', () => {
      let notification = utils.getSimpleNotificationElement();
      let classes = notification.getAttribute('class');
      expect(classes).toContain('success');
    });

    it('Should show notification text "Logowanie powiodło się"', () => {
      let notification = utils.getSimpleNotificationElement();
      expect(notification.getText()).toBe('Logowanie powiodło się');
    });
  });
});
