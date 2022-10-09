import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { concat, interval } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class CheckForUpdateService {
    constructor(appRef: ApplicationRef, updates: SwUpdate) {
        /**
         * Allow the app to stabilize first, before starting
         * polling for updates with `interval()`.
         */
        const appIsStable$ = appRef.isStable.pipe(
            first((isStable) => isStable === true)
        );
        const everySixHours$ = interval(6 * 60 * 60 * 1000);
        const everySixHoursOnceAppIsStable$ = concat(
            appIsStable$,
            everySixHours$
        );

        updates.isEnabled &&
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            everySixHoursOnceAppIsStable$.subscribe(async () => {
                try {
                    const updateFound = await updates.checkForUpdate();
                    // eslint-disable-next-line no-console
                    console.info(
                        updateFound
                            ? 'A new version is available.'
                            : 'Already on the latest version.'
                    );
                } catch (err) {
                    // eslint-disable-next-line no-console
                    console.error('Failed to check for updates:', err);
                }
            });
    }
}
