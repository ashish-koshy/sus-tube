import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
    providedIn: 'root',
})
export class LogUpdateService {
    constructor(swUpdate: SwUpdate) {
        swUpdate.isEnabled &&
            swUpdate.versionUpdates.subscribe((evt) => {
                let updateMessage = '';
                switch (evt.type) {
                    case 'VERSION_DETECTED':
                        updateMessage = `Downloading new app version: ${evt.version.hash}`;
                        break;
                    case 'VERSION_READY':
                        updateMessage = `
                        Current app version: ${evt.currentVersion.hash}
                        New app version ready for use: ${evt.latestVersion.hash}
                    `;
                        break;
                    case 'VERSION_INSTALLATION_FAILED':
                        updateMessage = `Failed to install app version '${evt.version.hash}': ${evt.error}`;
                        break;
                    default:
                        return;
                }
                // eslint-disable-next-line no-console
                console.info(updateMessage);
            });
    }
}
