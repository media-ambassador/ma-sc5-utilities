import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { MaSc5LoginIdentity } from '../../common';

import { MaSc5BaseLayoutView } from './base-layout.model';
import { MaSc5UtilsService } from '../../services/sc5-utils';

import { AppMenuTree, AppMenuTreeItem } from './app-menu-tree';

import * as _ from 'lodash';

@Component({
  selector: 'ma-sc5-base-layout',
  templateUrl: './base.layout.html',
  styleUrls: ['./base.layout.scss']
})
export class MaSc5BaseLayout implements OnInit {
  identity: MaSc5LoginIdentity;
  pageTitle = '';
  serviceName: string;
  catalogues: AppMenuTreeItem[] = [];
  activeCatalogue: AppMenuTreeItem;
  config: PerfectScrollbarConfigInterface = {
    wheelPropagation: true
  };

  private allCatalogues: AppMenuTreeItem[];

  constructor(private route: ActivatedRoute,
              private sc5UtilsService: MaSc5UtilsService) { }

  ngOnInit() {
    this.allCatalogues = AppMenuTree;

    this.route.data.subscribe(data => {
      if (!data && !data.identity) {
        this.sc5UtilsService.logoutUser();
      }

      this.identity = data.identity;

      this.setMenuCatalogues();
    });
  }

  onViewActive(component: MaSc5BaseLayoutView) {
    component.getTitle().subscribe(title => this.pageTitle = title);
    this.serviceName = component.getServiceName();
  }

  setMenuCatalogues() {
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
