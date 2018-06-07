import { OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
export declare class MaSc5EditElementModal implements OnInit {
    private ngxSmartModalService;
    identifier: string;
    modalTitle: string;
    isOpen: boolean;
    constructor(ngxSmartModalService: NgxSmartModalService);
    ngOnInit(): void;
    show(): void;
    close(): void;
    closeModal(): void;
}
