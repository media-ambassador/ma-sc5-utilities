import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders  } from '@angular/common/http';

import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink  } from 'apollo-angular-link-http';
import { ApolloLink, concat, from} from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { environment } from '../../../environments/environment';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CustomApolloService } from './custom-apollo.service';
import { CustomApolloModuleConfig, CustomApolloModuleConfigName } from './custom-apollo.model';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  declarations: []
})
export class CustomApolloModule {
  private tokenKey: string;

  constructor(@Optional() @SkipSelf() parentModule: CustomApolloModule,
              private customApolloService: CustomApolloService
    ) {
    if (parentModule) {
      throw new Error('CustomApolloModule is already loaded. Import only in CustomApolloModule');
    }

  }

  static forRoot(config: CustomApolloModuleConfig): ModuleWithProviders {
    return {
      ngModule: CustomApolloModule,
      providers: [
        CustomApolloService,
        { provide: CustomApolloModuleConfigName, useValue: config }
      ]
    }
  }
}
