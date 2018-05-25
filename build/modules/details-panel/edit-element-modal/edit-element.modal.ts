import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'ma-sc5-edit-element-modal',
  template: "\n    <ngx-smart-modal [identifier]=\"identifier\" (onOpen)=\"show()\" (onClose)=\"close()\" (onDismiss)=\"close()\" [ngClass]=\"{ 'open': isOpen }\">\n      <section *ngIf=\"isOpen\">\n          <header>\n            <span class=\"mat-title header-title\">\n                {{ modalTitle | translate }}\n            </span>\n\n            <button mat-button class=\"close-button\" (click)=\"closeModal()\">\n              <mat-icon>close</mat-icon>\n            </button>\n          </header>\n\n          <div class=\"modal-content\">\n              <ng-content></ng-content>\n          </div>\n      </section>\n    </ngx-smart-modal>\n  ",
  styles: ["\n    /**\n     * Applies styles for users in high contrast mode. Note that this only applies\n     * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n     * attribute, however Chrome handles high contrast differently.\n     */\n    /* Theme for the ripple elements.*/\n    /* stylelint-disable material/no-prefixes */\n    /* stylelint-enable */\n    :host > ngx-smart-modal section {\n      display: flex;\n      flex-direction: column;\n      flex: 1; }\n      :host > ngx-smart-modal section > header {\n        display: flex;\n        padding: 0 20px;\n        height: 65px;\n        min-height: 65px;\n        background: #fb8c00;\n        color: white;\n        align-items: center; }\n        :host > ngx-smart-modal section > header > .header-title {\n          flex: 1;\n          margin: 0; }\n        :host > ngx-smart-modal section > header > .close-button {\n          min-width: 30px;\n          max-width: 30px;\n          padding: 0;\n          margin: 0; }\n      :host > ngx-smart-modal section > .modal-content {\n        flex: 1;\n        width: 100%;\n        padding: 20px; }\n      :host > ngx-smart-modal section footer {\n        display: flex;\n        justify-content: flex-end;\n        height: 32px;\n        min-height: 52px;\n        border-top: 1px solid #e0e0e0;\n        padding: 8px; }\n        :host > ngx-smart-modal section footer .mat-button {\n          color: #fb8c00;\n          text-transform: uppercase;\n          margin-left: 8px; }\n          :host > ngx-smart-modal section footer .mat-button:first-of-type {\n            margin-left: 0; }\n          :host > ngx-smart-modal section footer .mat-button[disabled] {\n            color: #9e9e9e; }\n  "]
})
export class MaSc5EditElementModal implements OnInit {
  @Input() identifier: string;
  @Input() modalTitle: string;

  @HostBinding('class.open') isOpen = false;

  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    if (!this.identifier) {
      throw new Error(('Edit modal identifier is undefined'));
    }
  }

  show() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  closeModal() {
    this.ngxSmartModalService.getModal(this.identifier).close();
  }
}
