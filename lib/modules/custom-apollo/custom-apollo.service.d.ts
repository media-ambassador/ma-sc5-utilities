import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { CookieService } from 'ngx-cookie-service';
import { MaSc5CustomApolloModuleConfig } from './custom-apollo.model';
import { MaSc5UtilsService } from '../../services/sc5-utils';
export declare class MaSc5CustomApolloService {
    private config;
    private apollo;
    private httpLink;
    private cookieService;
    private utilsService;
    constructor(config: MaSc5CustomApolloModuleConfig, apollo: Apollo, httpLink: HttpLink, cookieService: CookieService, utilsService: MaSc5UtilsService);
    private initApollo(config);
}
