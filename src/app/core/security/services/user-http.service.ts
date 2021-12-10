//======================================================================
// MODULE => BOOK : HTTP BOOK SERVICE
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
import { first } from 'rxjs/operators';

//-----------------------------------------------------
// Import Module's components
//-----------------------------------------------------
import { UserInterface } from './../interfaces/user.interface';


//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Injectable({
    providedIn: 'root'
})


//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class UserHttpService {

    constructor(
        private http: HttpClient
    ) { }

    /**
     * HTTP Request to Read a user profil details
     */
    read(): Observable<HttpResponse<UserInterface>> {
        return this.http
            .get<UserInterface>(`profile`, { observe: 'response' })
            .pipe(first());
    }
}
