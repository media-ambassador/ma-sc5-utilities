import { browser, by, element, ElementFinder } from 'protractor';

export class Utils {

  getElementChildByCss(el: ElementFinder, cssPath: string): ElementFinder {
    return el.element(by.css(cssPath));
  }

  sendKeysToElementByCss(el: ElementFinder, cssPath: string, value: string): void {
    var field = this.getElementChildByCss(el, cssPath);
    field.sendKeys(value);
  }

  getSimpleNotificationElement(): ElementFinder {
    browser.sleep(150);
    return element(by.css('simple-notifications simple-notification .simple-notification'));
  }

}