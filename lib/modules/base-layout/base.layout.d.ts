import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MaSc5LoginIdentity } from '../../common';
import { MaSc5MenuItem } from '../../common/common.model';
import { MaSc5BaseLayoutView } from './base-layout.model';
import { MaSc5UtilsService } from '../../services/sc5-utils';
export declare class MaSc5BaseLayout implements OnInit {
    private route;
    private cookieService;
    private sc5UtilsService;
    identity: MaSc5LoginIdentity;
    menuItems: MaSc5MenuItem[];
    pageTitle: string;
    config: PerfectScrollbarConfigInterface;
    constructor(route: ActivatedRoute, cookieService: CookieService, sc5UtilsService: MaSc5UtilsService);
    ngOnInit(): void;
    onViewActive(component: MaSc5BaseLayoutView): void;
}
