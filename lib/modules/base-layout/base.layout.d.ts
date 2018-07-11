import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { MaSc5BaseLayoutView } from './base-layout.model';
import { MaSc5UtilsService } from '../../services/sc5-utils';
import { AppMenuTreeItem } from './app-menu-tree';
import { MaSc5IdentityService, MaSc5LoginIdentity } from '../../services/identity';
export declare class MaSc5BaseLayout implements OnInit, OnDestroy {
    private route;
    private sc5IdentityService;
    private sc5UtilsService;
    identity: MaSc5LoginIdentity;
    pageTitle: string;
    serviceName: string;
    catalogues: AppMenuTreeItem[];
    activeCatalogue: AppMenuTreeItem;
    config: PerfectScrollbarConfigInterface;
    private allCatalogues;
    private subscription;
    constructor(route: ActivatedRoute, sc5IdentityService: MaSc5IdentityService, sc5UtilsService: MaSc5UtilsService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onViewActive(component: MaSc5BaseLayoutView): void;
    setMenuCatalogues(): void;
}
