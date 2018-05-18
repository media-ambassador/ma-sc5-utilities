import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MaSc5BaseLayoutView } from '../../lib/modules/base-layout/base-layout.model';
import { MaSc5MenuItem } from '../../lib/common/common.model';
import { subscribe } from 'graphql';

@Component({
  selector: 'ma-sc5-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, MaSc5BaseLayoutView {

  constructor() { }

  ngOnInit() {
  }

  getTitle(): Observable<string> {
    return Observable.of('demos.home.pageTitle');
  }

}
