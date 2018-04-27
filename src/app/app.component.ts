import { Component, OnInit } from '@angular/core';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';


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

@Component({
  selector: 'ma-sc5-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  getUsers(search: any = {}): Observable<any> {
    return new Observable<any>(observer => {
      this.apollo.watchQuery({
        query: GetUsersQuery,
        variables: {
          search: search,
        },
      })
      .valueChanges.subscribe(({data}) => observer.next((<any>data).UserList));
    });
  }

  ngOnInit(): void {
    console.log(this.apollo);
    this.getUsers({})
    .subscribe(userList =>  {
      console.log(userList);
    });
  }
}
