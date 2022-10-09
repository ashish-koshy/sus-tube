import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {
    constructor(private http: HttpClient) {}

    private getApiBaseUrl(): string {
        return environment.apiBaseUrl || '';
    }

    public get(path: string, options: unknown = {}): Observable<unknown> {
        return this.http.get(`${this.getApiBaseUrl()}/${path}`, options);
    }

    public post(
        path: string,
        body: unknown,
        options: unknown = {}
    ): Observable<unknown> {
        return this.http.post(`${this.getApiBaseUrl()}/${path}`, body, options);
    }

    public put(
        path: string,
        body: unknown,
        options: unknown = {}
    ): Observable<unknown> {
        return this.http.put(`${this.getApiBaseUrl()}/${path}`, body, options);
    }

    public patch(
        path: string,
        body: unknown,
        options: unknown = {}
    ): Observable<unknown> {
        return this.http.patch(
            `${this.getApiBaseUrl()}/${path}`,
            body,
            options
        );
    }

    public delete(path: string, options: unknown = {}): Observable<unknown> {
        return this.http.delete(`${this.getApiBaseUrl()}/${path}`, options);
    }
}
