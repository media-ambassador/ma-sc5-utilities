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
  templateUrl: './base.layout.html',
  styleUrls: ['./base.layout.scss']
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
