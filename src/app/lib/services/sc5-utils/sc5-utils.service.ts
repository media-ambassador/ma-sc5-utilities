import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from 'angular2-notifications';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class MaSc5UtilsService {

  constructor(private translate: TranslateService,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private cookieService: CookieService) { }

  private modulePrefix = 'app';

  redirectToModule(moduleName: string, timeout = 0) {
    setTimeout(() => {
      window.location.href = `${window.location.protocol}//${window.location.host}/${moduleName}/${this.modulePrefix}/`; 
    }, timeout);
  }

  getModuleUrl(moduleName: string) {
    return `${window.location.protocol}//${window.location.host}/${moduleName}/${this.modulePrefix}/`; 
  }

  registerIcon(name: string, filePath: string) {
    this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(filePath));
  }

  logoutUser(timeout = 1500) {
    this.cookieService.deleteAll('/');
    this.redirectToModule('authentication', timeout);
  }

}
