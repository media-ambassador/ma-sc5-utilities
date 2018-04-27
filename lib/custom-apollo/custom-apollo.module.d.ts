import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CustomApolloService } from './custom-apollo.service';
import { CustomApolloModuleConfig } from './custom-apollo.model';
export declare class CustomApolloModule {
    private customApolloService;
    private tokenKey;
    constructor(parentModule: CustomApolloModule, customApolloService: CustomApolloService);
    static forRoot(config: CustomApolloModuleConfig): ModuleWithProviders;
}
