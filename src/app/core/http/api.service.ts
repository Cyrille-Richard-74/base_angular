//======================================================================
// CORE / HTTP : API SERVICE
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//-----------------------------------------------------
// Import Project's Components
//-----------------------------------------------------

// Project Environment
import { environment } from './../../../environments/environment';



// TODO: Interceptor HTTP Header
const Headers = new HttpHeaders({
    'Content-Type': 'application/json'
});



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Injectable({
    providedIn: 'root'
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class ApiService {

    constructor(
        private http: HttpClient
    ) { }

    head(url: string, data: any) {
        return this.http.head<any>(url, data);
    }

    get(url: string, data: any) {
        return this.http.get<any>(url, data);
    }

    post(url: string, data: any) {
        return this.http.post<any>(url, data, { headers: Headers });
    }

    put(url: string, data: any) {
        return this.http.put<any>(url, data, { headers: Headers });
    }

    delete(url: string, data: any) {
        return this.http.delete<any>(url, data);
    }
}
