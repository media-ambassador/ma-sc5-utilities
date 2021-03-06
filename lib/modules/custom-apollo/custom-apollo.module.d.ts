import { ModuleWithProviders } from '@angular/compiler/src/core';
import { MaSc5CustomApolloService } from './custom-apollo.service';
import { MaSc5CustomApolloModuleConfig } from './custom-apollo.model';
export declare class MaSc5CustomApolloModule {
    private customApolloService;
    private tokenKey;
    constructor(parentModule: MaSc5CustomApolloModule, customApolloService: MaSc5CustomApolloService);
    static forRoot(config: MaSc5CustomApolloModuleConfig): ModuleWithProviders;
}
