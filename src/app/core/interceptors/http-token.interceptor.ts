//======================================================================
// CORE / INTERCEPTORS / HTTP TOKEN
// Retrieve and Inject the user's JWT to the HTTP Request
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

//-----------------------------------------------------
// Import Project modules
//-----------------------------------------------------

import { AuthenticationService } from '../security/services/authentication.service';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Injectable()



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class HttpToken implements HttpInterceptor {

    constructor(
        private authentication: AuthenticationService
    ) { }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Retrieve current user data
        // const user = this.authentication.getUser;

        // Retrieve current token
        const token = this.authentication.getToken;

        // If user have a Token
        // if (user && user.token) {
        if (token) {
            httpRequest = httpRequest.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(httpRequest);
    }
}
