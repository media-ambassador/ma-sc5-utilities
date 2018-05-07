import { Injectable, Inject } from "@angular/core";
import { Apollo } from "apollo-angular";
import { HttpLink } from "apollo-angular-link-http";
import { ApolloLink, from } from "apollo-link";
import { HttpHeaders } from "@angular/common/http";
import { onError } from "apollo-link-error";
import { InMemoryCache } from "apollo-cache-inmemory";
import { CustomApolloModuleConfigName, CustomApolloModuleConfig } from "./custom-apollo.model";
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CustomApolloService {

  constructor(@Inject(CustomApolloModuleConfigName) private config: CustomApolloModuleConfig,
              private apollo: Apollo,
              private httpLink: HttpLink,
              private cookieService: CookieService) {

    this.initApollo(config);
  }

  private initApollo(config: CustomApolloModuleConfig) {
    const authMiddleware = new ApolloLink((operation, forward) => {
      if (this.cookieService.check(config.tokenKey)) {
        operation.setContext({
          headers: new HttpHeaders().set('x-jwt-token', this.cookieService.get(config.tokenKey))
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
            throw('401 not authorized');
          }
        }
      }
    });

    const httpApiLink = this.httpLink.create({
      uri: `${config.apiUrl}/api/graphql`,
      withCredentials: true
    });

    this.apollo.create({
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