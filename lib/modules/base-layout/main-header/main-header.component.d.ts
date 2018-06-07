import { OnInit } from '@angular/core';
import { MaSc5UtilsService } from '../../../services/sc5-utils';
export declare class MaSc5MainHeaderComponent implements OnInit {
    sc5UtilsService: MaSc5UtilsService;
    channels: string[];
    defaultChannel: string;
    services: string[];
    userId: string;
    pageTitle: string;
    constructor(sc5UtilsService: MaSc5UtilsService);
    ngOnInit(): void;
}
