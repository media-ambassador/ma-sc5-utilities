import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MaSc5LoginIdentity } from '../../common';
import { MaSc5BaseLayoutView } from './base-layout.model';
import { MaSc5UtilsService } from '../../services/sc5-utils';
import { AppMenuTreeItem } from './app-menu-tree';
export declare class MaSc5BaseLayout implements OnInit {
    private route;
    private sc5UtilsService;
    identity: MaSc5LoginIdentity;
    pageTitle: string;
    serviceName: string;
    catalogues: AppMenuTreeItem[];
    activeCatalogue: AppMenuTreeItem;
    config: PerfectScrollbarConfigInterface;
    private allCatalogues;
    constructor(route: ActivatedRoute, sc5UtilsService: MaSc5UtilsService);
    ngOnInit(): void;
    onViewActive(component: MaSc5BaseLayoutView): void;
    setMenuCatalogues(): void;
}
