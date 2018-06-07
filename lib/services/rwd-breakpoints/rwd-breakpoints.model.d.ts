import { BehaviorSubject } from 'rxjs/BehaviorSubject';
export interface MaSc5RwdBreakpoint {
    minSize: number;
    subject: BehaviorSubject<boolean>;
}
export interface MaSc5RwdBreakpoints {
    default: MaSc5RwdBreakpoint;
    desktopDevices: MaSc5RwdBreakpoint;
    laptopDevices: MaSc5RwdBreakpoint;
    laptopSmallDevices: MaSc5RwdBreakpoint;
    tabletDevices: MaSc5RwdBreakpoint;
    tabletSmallDevices: MaSc5RwdBreakpoint;
    phoneDevices: MaSc5RwdBreakpoint;
    phoneSmallDevices: MaSc5RwdBreakpoint;
}
