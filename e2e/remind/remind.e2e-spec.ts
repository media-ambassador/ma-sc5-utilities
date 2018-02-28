import { element, by } from 'protractor';
import { RemindPage } from './remind.po';
import { Utils } from '../untils.po';

describe('sc5-authentication Remind', () => {
  let page: RemindPage;
  let utils: Utils;

  let inputField;

  beforeEach(() => {
    page = new RemindPage();
    utils = new Utils();

    inputField = page.getFormLoginField();

    page.navigateTo();
  });

  it('Should show toast on success', () => {
    utils.sendKeysToElementByCss(inputField, "input", "tomasz.kuchne@mediaambassador.com");

    page.submitForm();

    var notification = utils.getSimpleNotificationElement();
    expect(notification).toBeTruthy();
  });
});
