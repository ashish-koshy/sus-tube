import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
    providedIn: 'root',
})
export class HandleUnrecoverableStateService {
    constructor(updates: SwUpdate) {
        updates.isEnabled &&
            updates.unrecoverable.subscribe((event) => {
                if (
                    confirm(
                        'An error occurred that we cannot recover from:\n' +
                            event.reason +
                            '\n\nWould you like to try reloading the application ?'
                    )
                )
                    document.location.reload();
            });
    }
}
