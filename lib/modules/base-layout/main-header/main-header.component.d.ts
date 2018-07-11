import { OnInit } from '@angular/core';
import { MaSc5UtilsService } from '../../../services/sc5-utils';
import { AppMenuTreeItem } from '../app-menu-tree';
export declare class MaSc5MainHeaderComponent implements OnInit {
    sc5UtilsService: MaSc5UtilsService;
    channels: string[];
    defaultChannel: string;
    catalogues: AppMenuTreeItem[];
    activeCatalogue: string;
    userId: string;
    pageTitle: string;
    constructor(sc5UtilsService: MaSc5UtilsService);
    ngOnInit(): void;
}
