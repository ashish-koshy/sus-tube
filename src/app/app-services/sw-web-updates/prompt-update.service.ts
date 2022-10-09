import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class PromptUpdateService {
    constructor(swUpdate: SwUpdate) {
        swUpdate.isEnabled &&
            swUpdate.versionUpdates
                .pipe(
                    filter(
                        (evt): evt is VersionReadyEvent =>
                            evt.type === 'VERSION_READY'
                    )
                )
                .subscribe(() => {
                    if (
                        confirm(
                            'There is a new version of the application available. Would you like to update to the latest version ?'
                        )
                    )
                        document.location.reload();
                });
    }
}
