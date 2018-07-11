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
  templateUrl: './base.layout.html',
  styleUrls: ['./base.layout.scss']
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
