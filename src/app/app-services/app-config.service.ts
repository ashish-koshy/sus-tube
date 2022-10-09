import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Config, defaultConfig } from 'src/app/app-types/config.type';
import { ServiceTypes } from '../app-constants/service-paths.constant';
import { HttpService } from './http.service';

@Injectable({
    providedIn: 'root',
})
export class AppConfigService {
    private appConfig = new BehaviorSubject<Config>(defaultConfig);

    constructor(private http: HttpService) {}

    public appConfigUpdates(): Observable<Config> {
        return this.appConfig.asObservable();
    }

    public setAppConfig(): Observable<unknown> {
        return this.http.get(ServiceTypes.config).pipe(
            catchError((error: HttpErrorResponse) => of(error)),
            tap((config: Config) => config && this.appConfig.next(config))
        );
    }
}
