import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

  redirectToService(name: string, timeout = 0) {
    setTimeout(() => {
      window.location.href = `${window.location.protocol}//${window.location.host}/${name}/${this.modulePrefix}/`;
    }, timeout);
  }

  getServiceUrl(moduleName: string) {
    return `${window.location.protocol}//${window.location.host}/${moduleName}/${this.modulePrefix}/`;
  }

  getCatalogueName(name: string) {
    return this.translate.instant(`ma.sc5.catalogue.title.${name}`);
  }

  getServiceName(name: string) {
    return this.translate.instant(`ma.sc5.service.title.${name}`);
  }

  registerIcon(name: string, filePath: string) {
    this.iconRegistry.addSvgIcon(name, this.sanitizer.bypassSecurityTrustResourceUrl(filePath));
  }

  logoutUser(timeout = 1500) {
    this.cookieService.deleteAll('/');
    this.redirectToService('authentication', timeout);
  }

}
