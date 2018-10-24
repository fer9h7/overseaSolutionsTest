import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class DatesService {

	constructor(public http: HttpClient){}
    
    public getDatesList(): Observable<any> {	
    	return this.http.get<any>(environment.api_url + '/dates');
    }

    public getDate(id: any): Observable<any> {	
    	return this.http.get<any>(environment.api_url + '/dates/' + id);
    }
}
