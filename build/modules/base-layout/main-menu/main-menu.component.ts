import { Component, OnInit, Input } from '@angular/core';
import { AppMenuTreeItem } from '../app-menu-tree';
import { MaSc5UtilsService } from '../../../services/sc5-utils';

@Component({
  selector: 'ma-sc5-main-menu',
  template: "\n    <ul>\n      <li *ngFor=\"let service of catalogue.services\">\n        <a href=\"{{ sc5UtilsService.getServiceUrl(service) }}\" [ngClass]=\"{ 'active': service === activeService }\">\n            {{ sc5UtilsService.getServiceName(service) }}\n        </a>\n      </li>\n    </ul>\n  ",
  styles: ["\n    /**\n     * Applies styles for users in high contrast mode. Note that this only applies\n     * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n     * attribute, however Chrome handles high contrast differently.\n     */\n    /* Theme for the ripple elements.*/\n    /* stylelint-disable material/no-prefixes */\n    /* stylelint-enable */\n    :host ul {\n      display: flex;\n      margin: 0;\n      padding: 0 15px;\n      list-style: none; }\n      :host ul li a {\n        position: relative;\n        display: block;\n        padding: 0 10px;\n        line-height: 50px;\n        text-decoration: none;\n        color: #757575; }\n        :host ul li a:hover {\n          color: rgba(0, 0, 0, 0.87); }\n        :host ul li a.active {\n          color: rgba(0, 0, 0, 0.87); }\n          :host ul li a.active::after {\n            position: absolute;\n            left: 0;\n            bottom: 0;\n            content: \"\";\n            width: 100%;\n            height: 2px;\n            background: #fb8c00; }\n  "]
})
export class MaSc5MainMenuComponent implements OnInit {
  @Input() catalogue: AppMenuTreeItem;
  @Input() activeService: string;

  constructor(public sc5UtilsService: MaSc5UtilsService) { }

  ngOnInit() {
  }

}
