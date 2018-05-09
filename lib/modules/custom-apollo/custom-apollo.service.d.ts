import { Apollo } from "apollo-angular";
import { HttpLink } from "apollo-angular-link-http";
import { CustomApolloModuleConfig } from "./custom-apollo.model";
import { CookieService } from 'ngx-cookie-service';
export declare class MaSc5CustomApolloService {
    private config;
    private apollo;
    private httpLink;
    private cookieService;
    constructor(config: CustomApolloModuleConfig, apollo: Apollo, httpLink: HttpLink, cookieService: CookieService);
    private initApollo(config);
}
