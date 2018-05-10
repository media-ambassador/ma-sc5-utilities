import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from 'angular2-notifications';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
export declare class MaSc5UtilsService {
    private translate;
    private notificationsService;
    private iconRegistry;
    private sanitizer;
    private cookieService;
    constructor(translate: TranslateService, notificationsService: NotificationsService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, cookieService: CookieService);
    private modulePrefix;
    redirectToModule(moduleName: string, timeout?: number): void;
    getModuleUrl(moduleName: string): string;
    registerIcon(name: string, filePath: string): void;
    logoutUser(timeout?: number): void;
}
