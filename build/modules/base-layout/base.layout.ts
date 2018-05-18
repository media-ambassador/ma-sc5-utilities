import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { MaSc5LoginIdentity } from '../../common';
import { MaSc5MenuItem } from '../../common/common.model';

import { MaSc5BaseLayoutView } from './base-layout.model';
import { MaSc5UtilsService } from '../../services/sc5-utils';

@Component({
  selector: 'ma-sc5-base-layout',
  template: "\n    <header>\n      <ma-sc5-main-header [channels]=\"identity.channels\"\n                          [services]=\"identity.services\"\n                          [userId]=\"identity.id\"\n                          [pageTitle]=\"pageTitle\"\n                          [defaultChannel]=\"identity.default_channel\">\n      </ma-sc5-main-header>\n\n      <ma-sc5-main-menu [menuItems]=\"menuItems\"></ma-sc5-main-menu>\n    </header>\n\n    <section>\n      <perfect-scrollbar [config]=\"config\">\n        <router-outlet (activate)=\"onViewActive($event)\"></router-outlet>\n      </perfect-scrollbar>\n    </section>\n\n    <footer>\n      <ma-sc5-main-footer></ma-sc5-main-footer>\n    </footer>\n  ",
  styles: ["\n    /**\n     * Applies styles for users in high contrast mode. Note that this only applies\n     * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n     * attribute, however Chrome handles high contrast differently.\n     */\n    /* Theme for the ripple elements.*/\n    /* stylelint-disable material/no-prefixes */\n    /* stylelint-enable */\n    :host {\n      display: grid;\n      width: 100%;\n      height: 100vh;\n      grid-gap: 0;\n      grid-template-columns: 1fr;\n      grid-template-rows: 115px 1fr 50px;\n      grid-template-areas: \"main-header\" \"router-outlet\" \"main-footer\"; }\n      :host > header {\n        grid-area: main-header;\n        background: white;\n        box-shadow: 0px 0px 15px -1px rgba(117, 117, 117, 0.4); }\n      :host > section {\n        grid-area: router-outlet;\n        max-height: calc(100vh - (115px + 50px));\n        padding: 20px 10px; }\n        :host > section perfect-scrollbar {\n          max-height: calc(100vh - (115px + 50px + 40px));\n          background: white;\n          box-shadow: 0px 0px 15px -1px rgba(117, 117, 117, 0.4); }\n      :host > footer {\n        grid-area: main-footer;\n        background: white;\n        box-shadow: 0px 0px 15px -1px rgba(117, 117, 117, 0.4); }\n  "]
})
export class MaSc5BaseLayout implements OnInit {
  identity: MaSc5LoginIdentity;
  menuItems: MaSc5MenuItem[] = [{
    text: 'ma.sc5.mainMenu.homePage',
    routerLink: '/'
  }];
  pageTitle = '';
  config: PerfectScrollbarConfigInterface = {
    wheelPropagation: true
  };

  constructor(private route: ActivatedRoute,
              private cookieService: CookieService,
              private sc5UtilsService: MaSc5UtilsService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (!data && !data.identity) {
        this.sc5UtilsService.logoutUser();
      }

      this.identity = data.identity;
    });
  }

  onViewActive(component: MaSc5BaseLayoutView) {
    component.getTitle().subscribe(title => this.pageTitle = title);
  }
}
