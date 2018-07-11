import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
export declare class MaSc5UtilsService {
    private translate;
    private iconRegistry;
    private sanitizer;
    private cookieService;
    constructor(translate: TranslateService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, cookieService: CookieService);
    private modulePrefix;
    redirectToService(name: string, timeout?: number): void;
    getServiceUrl(moduleName: string): string;
    getCatalogueName(name: string): any;
    getServiceName(name: string): any;
    registerIcon(name: string, filePath: string): void;
    logoutUser(timeout?: number): void;
}
