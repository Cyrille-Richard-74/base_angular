//======================================================================
// CORE / INTERCEPTORS / API ENDPOINT
// Retrieve and Inject the user's JWT to the HTTP Request
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Injectable()



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class ApiEndPoint implements HttpInterceptor {

    constructor() { }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const req = httpRequest.clone({
            url: `${environment.apiEndpoint}${httpRequest.url}`
        });

        return next.handle(req);
    }
}
