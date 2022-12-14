import { TestBed } from '@angular/core/testing';
import { ServiceWorkerModule } from '@angular/service-worker';

import { PromptUpdateService } from './prompt-update.service';

describe('PromptUpdateService', () => {
    let service: PromptUpdateService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ServiceWorkerModule.register('', { enabled: false })],
        });
        service = TestBed.inject(PromptUpdateService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
