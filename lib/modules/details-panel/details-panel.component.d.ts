import { OnInit, EventEmitter } from '@angular/core';
export declare class MaSc5DetailsPanelComponent implements OnInit {
    headerTitle: string;
    panelDisplay: EventEmitter<boolean>;
    isOpen: boolean;
    onClick(event: any): void;
    constructor();
    ngOnInit(): void;
    open(): void;
    close(): void;
}
