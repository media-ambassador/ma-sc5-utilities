import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from 'angular2-notifications';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
export declare class Sc5UtilsService {
    private translate;
    private notificationsService;
    private iconRegistry;
    private sanitizer;
    constructor(translate: TranslateService, notificationsService: NotificationsService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer);
    private modulePrefix;
    redirectToModule(moduleName: string, timeout?: number): void;
    getModuleUrl(moduleName: string): string;
    registerIcon(name: string, filePath: string): void;
    logoutUser(timeout?: number): void;
}
