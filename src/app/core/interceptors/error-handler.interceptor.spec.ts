import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler } from './error-handler.interceptor';

describe('ErrorHandler', () => {
    it('should create an instance', () => {
        expect(HTTP_INTERCEPTORS).toBeTruthy();
    });
});
