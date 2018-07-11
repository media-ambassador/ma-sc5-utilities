import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Observable';
import { MaSc5EnvironmentConfig } from '../../common/common.model';
import { MaSc5LoginIdentity } from './identity.model';
export declare class MaSc5IdentityService {
    private config;
    private cookieService;
    private identity;
    private identitySubject;
    constructor(config: MaSc5EnvironmentConfig, cookieService: CookieService);
    init(identity?: MaSc5LoginIdentity): void;
    watchIdentity(): Observable<MaSc5LoginIdentity>;
    getIdentity(): MaSc5LoginIdentity;
    clearIdentity(): void;
}
