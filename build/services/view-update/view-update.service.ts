import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { MaSc5ViewUpdateEvent, MaSc5ViewUpdateType } from './view-update.model';

@Injectable()
export class MaSc5ViewUpdateService<T> {

  private viewSubject = new BehaviorSubject<MaSc5ViewUpdateEvent<T>>(null);

  constructor() { }

  watchViewUpdate(): Observable<MaSc5ViewUpdateEvent<T>> {
    return this.viewSubject.asObservable();
  }

  updateView(type: MaSc5ViewUpdateType, data: T = null): void {
    this.viewSubject.next({
      type: type,
      data: data
    });
  }

}
