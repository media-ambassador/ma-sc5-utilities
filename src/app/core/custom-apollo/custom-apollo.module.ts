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
  constructor(@Optional() @SkipSelf() parentModule: CustomApolloModule,
              private apollo: Apollo,
              private httpLink: HttpLink
    ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in CoreModule');
    }

    const authMiddleware = new ApolloLink((operation, forward) => {
      let token = localStorage.getItem(environment.tokenKeyName);

      if (token) {
        operation.setContext({
          headers: new HttpHeaders().set('x-jwt-token', token)
        });
      }
      return forward(operation);
    });

    const errorHandler = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        );

      if (networkError) {
        switch ((<any>networkError).status) {
          case 401: {
            window.location.href = `${window.location.protocol}//${window.location.host}/`; 
            break;
          }
        }
      }
    });

    const httpApiLink = httpLink.create({ uri: `${environment.apiGraphQL}/api/graphql` });

    apollo.create({
      link: from([authMiddleware, errorHandler, httpApiLink]),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          errorPolicy: 'all'
        }
      }
    });
  }

}
