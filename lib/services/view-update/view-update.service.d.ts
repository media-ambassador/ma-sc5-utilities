import { Observable } from 'rxjs/Observable';
import { MaSc5ViewUpdateEvent, MaSc5ViewUpdateType } from './view-update.model';
export declare class MaSc5ViewUpdateService<T> {
    private viewSubject;
    constructor();
    watchViewUpdate(): Observable<MaSc5ViewUpdateEvent<T>>;
    updateView(type: MaSc5ViewUpdateType, data?: T): void;
}
