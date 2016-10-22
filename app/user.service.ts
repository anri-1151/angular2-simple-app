import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { User } from './user';


@Injectable()
export class UserService {

    private userServiceUrl = 'http://localhost:1337/api/users';
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http){}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getAllUsers():Promise<User[]> {
        //noinspection TypeScriptUnresolvedFunction
        return this.http
                .post(this.userServiceUrl + '/getAll', {}, this.options)
                .toPromise()
                .then(res => res.json().data as User[])
                .catch(this.handleError);

    }

    getUser(id: string): Promise<User> {
        //noinspection TypeScriptUnresolvedFunction
        return this.http
                .get(this.userServiceUrl + '/get/' + id)
                .toPromise()
                .then(res => res.json().user as User)
                .catch(this.handleError);
    }


}

