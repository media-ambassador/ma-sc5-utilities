import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-sc5-table-selected-rows',
  template: "\n    <div class=\"selection-count\">\n      <span class=\"mat-body-2\">\n       {{ 'ma.sc5.tableWrapper.common.selectedRows' | translate:{ count: getItemsCounts() }  }}\n      </span>\n    </div>\n\n    <div class=\"actions\">\n      <ng-content></ng-content>\n    </div>\n  ",
  styles: ["\n    /**\n     * Applies styles for users in high contrast mode. Note that this only applies\n     * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n     * attribute, however Chrome handles high contrast differently.\n     */\n    /* Theme for the ripple elements.*/\n    /* stylelint-disable material/no-prefixes */\n    /* stylelint-enable */\n    :host {\n      position: absolute;\n      left: 0;\n      top: 0;\n      z-index: 5;\n      display: flex;\n      width: 100%;\n      padding: 18px 25px;\n      background: #fb8c00; }\n      :host .selection-count {\n        display: flex;\n        align-items: center; }\n        :host .selection-count span {\n          color: white; }\n      :host .actions {\n        display: flex;\n        flex: 1;\n        justify-content: flex-end;\n        align-items: center; }\n        :host .actions::ng-deep button {\n          border: none;\n          background: none;\n          margin-left: 5px; }\n          :host .actions::ng-deep button:focus {\n            outline: none; }\n          :host .actions::ng-deep button:first-of-type {\n            margin-left: 0; }\n          :host .actions::ng-deep button mat-icon {\n            color: white; }\n  "]
})
export class MaSc5TableSelectedRowsComponent implements OnInit {
  @Input() items: number;
  @Input() totalCount: number;
  @Input() isTotal: boolean;

  constructor() { }

  ngOnInit() {
  }

  getItemsCounts() {
    return this.isTotal ? this.totalCount : this.items;
  }
}
