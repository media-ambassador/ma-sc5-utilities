import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from 'angular2-notifications';
import { environment } from '../../../environments/environment';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class Sc5UtilsService {

  constructor(private translate: TranslateService,
              private notificationsService: NotificationsService,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer) { }

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
    localStorage.removeItem(environment.tokenKeyName);
    localStorage.removeItem(environment.identityKeyName);
    this.notificationsService.success(this.translate.instant("common.logout.user.notification"));
    this.redirectToModule('authentication', timeout);
  }

}
