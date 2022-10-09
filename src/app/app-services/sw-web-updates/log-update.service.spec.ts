import { TestBed } from '@angular/core/testing';
import { ServiceWorkerModule } from '@angular/service-worker';

import { LogUpdateService } from './log-update.service';

describe('LogUpdateService', () => {
    let service: LogUpdateService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ServiceWorkerModule.register('', { enabled: false })],
        });
        service = TestBed.inject(LogUpdateService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
