import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { ApiUser, ApiGetUserResponse } from './api-user.model';
import { TableSearch } from '../../shared/components/base-table/base-table.model';

const GetUsersQuery = gql`
query getUsers($search:UserSearchParams!){
  UserList(search:$search){
    success
    total
    items {
      id
      firstname
      lastname,
      status
    }
  }
}
`;

@Injectable()
export class ApiUserService {

  constructor(private apollo: Apollo) { }

  getUsers(search: TableSearch = {}): Observable<ApiGetUserResponse> {
    return new Observable<ApiGetUserResponse>(observer => {
      this.apollo.watchQuery({
        query: GetUsersQuery,
        variables: {
          search: search,
        },
      })
      .valueChanges.subscribe(({data}) => observer.next((<any>data).UserList));
    });
  }
}
