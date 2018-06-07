import { Observable } from 'rxjs/Observable';
import { MaSc5RwdBreakpoints } from '.';
export declare class MaSc5RwdBreakpointsService {
    private rwdBreakpoints;
    constructor();
    private emitRwdBreakpoints(name, value);
    private handleWindowSize(size);
    getRwdBreakpoint(name: keyof MaSc5RwdBreakpoints): Observable<boolean>;
}
