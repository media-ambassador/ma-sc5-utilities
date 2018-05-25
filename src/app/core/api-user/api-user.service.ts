import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { ApiUser, ApiGetUserResponse } from './api-user.model';
import { MaSc5CustomResponse } from '../../lib/modules/custom-apollo';

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

const ChangeUserName = gql`
mutation changeUserName($data:UserNameInput!) {
  UserNameChange(data: $data){
    id
    success
    error
    validation {
      field
      messages {
        name
      }
    }
  }
}
`;

@Injectable()
export class ApiUserService {

  constructor(private apollo: Apollo) { }

  getUsers(search: any = {}): Observable<ApiGetUserResponse> {
    return new Observable<ApiGetUserResponse>(observer => {
      this.apollo.watchQuery({
        query: GetUsersQuery,
        fetchPolicy: 'network-only',
        variables: {
          search: search,
        },
      })
      .valueChanges.subscribe(({data}) => {
        observer.next((<any>data).UserList);
        observer.complete();
      });
    });
  }

  changeUserName(data: any): Observable<MaSc5CustomResponse> {
    return new Observable<MaSc5CustomResponse>(subscribe => {
      this.apollo.mutate({
        mutation: ChangeUserName,
        variables: {
          data: data
        }
      }).subscribe(
        result => {
          subscribe.next(result.data.UserNameChange);
        },
        err => console.log(err)
      );
    });
  }
}
