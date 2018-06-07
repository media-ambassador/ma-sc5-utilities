import { Injectable, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { MaSc5RwdBreakpoints } from '.';

@Injectable()
export class MaSc5RwdBreakpointsService {
  private rwdBreakpoints: MaSc5RwdBreakpoints = {
    default: { minSize: 99999, subject: new BehaviorSubject<boolean>(true) },
    desktopDevices: { minSize: 1540, subject: new BehaviorSubject<boolean>(true) },
    laptopDevices: { minSize: 1366, subject: new BehaviorSubject<boolean>(true) },
    laptopSmallDevices: { minSize: 1200, subject: new BehaviorSubject<boolean>(true) },
    tabletDevices: { minSize: 1024, subject: new BehaviorSubject<boolean>(true) },
    tabletSmallDevices: { minSize: 768, subject: new BehaviorSubject<boolean>(true) },
    phoneDevices: { minSize: 500, subject: new BehaviorSubject<boolean>(true) },
    phoneSmallDevices: { minSize: 320, subject: new BehaviorSubject<boolean>(true) }
  };

  constructor() {
    this.handleWindowSize(window.innerWidth);
    window.addEventListener('resize', (event: any) => this.handleWindowSize(event.target.innerWidth), false);
  }

  private emitRwdBreakpoints(name: keyof MaSc5RwdBreakpoints, value: boolean) {
    this.rwdBreakpoints[name].subject.next(value);
  }

  private handleWindowSize(size: number) {
    _.forOwn(this.rwdBreakpoints, (breakpoint, key: keyof MaSc5RwdBreakpoints) => {
      size > breakpoint.minSize
        ? this.emitRwdBreakpoints(key, false)
        : this.emitRwdBreakpoints(key, true);
    });
  }

  getRwdBreakpoint(name: keyof MaSc5RwdBreakpoints): Observable<boolean> {
    return this.rwdBreakpoints[name].subject.asObservable();
  }

}
