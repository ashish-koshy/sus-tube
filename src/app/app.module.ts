import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { AuthInterceptor } from './app-interceptors/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppConfigService } from './app-services/app-config.service';
import { CheckForUpdateService } from './app-services/sw-web-updates/check-for-update.service';
import { HandleUnrecoverableStateService } from './app-services/sw-web-updates/handle-unrecoverable-state.service';
import { LogUpdateService } from './app-services/sw-web-updates/log-update.service';
import { PromptUpdateService } from './app-services/sw-web-updates/prompt-update.service';
import { AppComponent } from './app.component';

const setAppConfig = (appConfig: AppConfigService) => (): Observable<unknown> =>
    appConfig.setAppConfig();

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            /**
             * Register the ServiceWorker as soon as the application is stable
             * or after 30 seconds (whichever comes first).
             */
            registrationStrategy: 'registerWhenStable:30000',
        }),
    ],
    providers: [
        AppConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: setAppConfig,
            deps: [AppConfigService],
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
    constructor(
        /**
         * All the services below are used to communicate with a
         * registered ServiceWorker in a web browser.
         * */
        public logUpdate: LogUpdateService,
        public promptUpdate: PromptUpdateService,
        public checkForUpdate: CheckForUpdateService,
        public handleUnrecoverableState: HandleUnrecoverableStateService
    ) {}
}
