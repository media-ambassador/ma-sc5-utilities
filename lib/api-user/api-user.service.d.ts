import { Observable } from 'rxjs/Observable';
import { Apollo } from 'apollo-angular';
import { ApiGetUserResponse } from './api-user.model';
export declare class ApiUserService {
    private apollo;
    constructor(apollo: Apollo);
    getUsers(search?: any): Observable<ApiGetUserResponse>;
}
