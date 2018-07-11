import { OnInit } from '@angular/core';
import { AppMenuTreeItem } from '../app-menu-tree';
import { MaSc5UtilsService } from '../../../services/sc5-utils';
export declare class MaSc5MainMenuComponent implements OnInit {
    sc5UtilsService: MaSc5UtilsService;
    catalogue: AppMenuTreeItem;
    activeService: string;
    constructor(sc5UtilsService: MaSc5UtilsService);
    ngOnInit(): void;
}
