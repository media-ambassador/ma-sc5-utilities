import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { MaSc5BaseLayoutView } from './base-layout.model';
import { MaSc5UtilsService } from '../../services/sc5-utils';

import { AppMenuTree, AppMenuTreeItem } from './app-menu-tree';

import * as _ from 'lodash';
import { MaSc5IdentityService, MaSc5LoginIdentity } from '../../services/identity';
import { Subscription } from 'apollo-client/util/Observable';

@Component({
  selector: 'ma-sc5-base-layout',
  template: "\n    <header *ngIf=\"serviceName\">\n      <ma-sc5-main-header [channels]=\"identity.channels\"\n                          [catalogues]=\"catalogues\"\n                          [activeCatalogue]=\"activeCatalogue.name\"\n                          [userId]=\"identity.id\"\n                          [pageTitle]=\"pageTitle\"\n                          [defaultChannel]=\"identity.default_channel\">\n      </ma-sc5-main-header>\n\n      <ma-sc5-main-menu [catalogue]=\"activeCatalogue\" [activeService]=\"serviceName\"></ma-sc5-main-menu>\n    </header>\n\n    <section>\n      <perfect-scrollbar [config]=\"config\">\n        <router-outlet (activate)=\"onViewActive($event)\"></router-outlet>\n      </perfect-scrollbar>\n    </section>\n\n    <footer>\n      <ma-sc5-main-footer></ma-sc5-main-footer>\n    </footer>\n  ",
  styles: ["\n    /**\n     * Applies styles for users in high contrast mode. Note that this only applies\n     * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n     * attribute, however Chrome handles high contrast differently.\n     */\n    /* Theme for the ripple elements.*/\n    /* stylelint-disable material/no-prefixes */\n    /* stylelint-enable */\n    :host {\n      display: grid;\n      width: 100%;\n      height: 100vh;\n      grid-gap: 0;\n      grid-template-columns: 1fr;\n      grid-template-rows: 115px 1fr 50px;\n      grid-template-areas: \"main-header\" \"router-outlet\" \"main-footer\"; }\n      :host > header {\n        grid-area: main-header;\n        background: white;\n        box-shadow: 0px 0px 15px -1px rgba(117, 117, 117, 0.4); }\n      :host > section {\n        grid-area: router-outlet;\n        max-height: calc(100vh - (115px + 50px));\n        padding: 20px 10px; }\n        :host > section perfect-scrollbar {\n          max-height: calc(100vh - (115px + 50px + 40px));\n          background: white;\n          box-shadow: 0px 0px 15px -1px rgba(117, 117, 117, 0.4); }\n      :host > footer {\n        grid-area: main-footer;\n        background: white;\n        box-shadow: 0px 0px 15px -1px rgba(117, 117, 117, 0.4); }\n  "]
})
export class MaSc5BaseLayout implements OnInit, OnDestroy {
  identity: MaSc5LoginIdentity;
  pageTitle = '';
  serviceName: string;
  catalogues: AppMenuTreeItem[] = [];
  activeCatalogue: AppMenuTreeItem;
  config: PerfectScrollbarConfigInterface = {
    wheelPropagation: true
  };

  private allCatalogues: AppMenuTreeItem[];
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private sc5IdentityService: MaSc5IdentityService,
              private sc5UtilsService: MaSc5UtilsService) { }

  ngOnInit() {
    this.allCatalogues = AppMenuTree;

    this.subscription = this.sc5IdentityService.watchIdentity().subscribe(identity => {
      if (!!identity) {
        this.identity = identity;
        this.setMenuCatalogues();
      } else {
        this.sc5UtilsService.logoutUser();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onViewActive(component: MaSc5BaseLayoutView) {
    component.getTitle().subscribe(title => this.pageTitle = title);
    this.serviceName = component.getServiceName();
  }

  setMenuCatalogues() {
    this.catalogues = [];
    this.activeCatalogue = null;

    this.allCatalogues.forEach(catalogue => {
      const services = [];
      let isCatalogueActive = false;

      catalogue.services.forEach(service => {
        if (_.indexOf(this.identity.services, service) >= 0) {
          services.push(service);
        }

        if (service === this.serviceName) {
          isCatalogueActive = true;
        }
      });

      if (services.length > 0) {
        this.catalogues.push({
          name: catalogue.name,
          icon: catalogue.icon,
          active: true,
          services: services,
          link: this.sc5UtilsService.getServiceUrl(services[0])
        });
      }

      if (isCatalogueActive) {
        this.activeCatalogue = this.catalogues[this.catalogues.length - 1];
      }
    });
  }
}
