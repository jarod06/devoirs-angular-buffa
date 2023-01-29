import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Devoir, ResponseResult } from './models';

@Injectable()
export class DevoirService {
	baseUrl = "http://localhost:5000/";
	apiUrl = this.baseUrl + "api/devoir";

	constructor(private http: HttpClient) {
	}

	getDevoirs(): Observable<Devoir[]> {
		return this.http.get<Devoir[]>(this.apiUrl)
	}

	createDevoir(devoir: Devoir): Observable<any> {
		return this.http.post(this.apiUrl, devoir, {observe: 'response'})
		.pipe(map(res => res.status))
	}

	getDevoirById(pid: string): Observable<Devoir> {
		return this.http.get<Devoir>(this.apiUrl + "/" + pid)
	}

	updateDevoir(devoir: Devoir): Observable<any> {
		return this.http.put(this.apiUrl + "/" + devoir._id, devoir, {observe: 'response'})
		.pipe(map(res => res.status))
	}

	deleteDevoirById(pid: string): Observable<any> {
		return this.http.delete(this.apiUrl +"/"+ pid, {observe: 'response'})
		.pipe(map(res => res.status))
	}
}