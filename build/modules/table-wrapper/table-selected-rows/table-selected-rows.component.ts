import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-sc5-table-selected-rows',
  template: "\n    <div class=\"selection-count\">\n      <span class=\"mat-body-2\">\n       {{ 'ma.sc5.tableWrapper.common.selectedRows' | translate:{ count: getItemsCouns() }  }}\n      </span>\n    </div>\n\n    <div class=\"actions\">\n      <ng-content></ng-content>\n    </div>\n  ",
  styles: ["\n    @import '../../../../../styles/lib';\n\n    :host {\n      position: absolute;\n      left: 0;\n      top: 0;\n      z-index: 5;\n      display: flex;\n      width: 100%;\n      padding: 18px 25px;\n      background: mat-color($mat-orange, 600);\n\n      .selection-count {\n        display: flex;\n        align-items: center;\n\n        span {\n          color: white;\n        }\n      }\n\n      .actions {\n        display: flex;\n        flex: 1;\n        justify-content: flex-end;\n        align-items: center;\n\n        &::ng-deep {\n          button {\n            border: none;\n            background: none;\n            margin-left: 5px;\n\n            &:focus { outline: none; }\n            &:first-of-type { margin-left: 0; }\n            mat-icon { color: white; }\n          }\n        }\n      }\n\n    }\n  "]
})
export class MaSc5TableSelectedRowsComponent implements OnInit {
  @Input() items: number;
  @Input() totalCount: number;
  @Input() isTotal: boolean;

  constructor() { }

  ngOnInit() {
  }

  getItemsCouns() {
    return this.isTotal ? this.totalCount : this.items;
  }
}
