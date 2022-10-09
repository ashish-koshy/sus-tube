import { TestBed } from '@angular/core/testing';
import { ServiceWorkerModule } from '@angular/service-worker';

import { CheckForUpdateService } from './check-for-update.service';

describe('CheckForUpdateService', () => {
    let service: CheckForUpdateService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ServiceWorkerModule.register('', { enabled: false })],
        });
        service = TestBed.inject(CheckForUpdateService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
