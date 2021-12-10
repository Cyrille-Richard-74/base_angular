//======================================================================
// CORE / SECURITY / PROFIL COMPONENT
// Retrieve User data from localstorage (by authentication service)
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//-----------------------------------------------------
// Import Project's Components
//-----------------------------------------------------

/* Services */
import { TitleService } from '../../../services/title/title.service';

//-----------------------------------------------------
// Import Modules's Components
//-----------------------------------------------------

/* Services */
import { AuthenticationService } from './../../services/authentication.service';
import { UserHttpService } from './../../services/user-http.service';

/* Interfaces */
import { UserInterface } from './../../interfaces/user.interface';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
    templateUrl: './profile.component.html'
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class ProfileComponent implements OnInit {

    /* States */
    dataLoading: boolean = true; // Data loading
    pageReady: boolean = false; // Page is ready / loaded for first time

    /* HTTP Request */
    httpResponse: any = {};
    httpError: string = null;

    /* User */
    // User Data by Authentication query (When the user proceed to login)
    user_1: UserInterface;
    user_2: UserInterface;

    constructor(
        private authentication: AuthenticationService,
        private http: UserHttpService,
        private route: ActivatedRoute,
        private title: TitleService
    ) { }

    ngOnInit() {

        // Set page title
        this.route.data.subscribe(data => {
            this.title.setTitle = data.title;
        });

        /* Observe user data */
        this.authentication.user.subscribe(x => this.user_1 = x);

        // Get User data
        this.getUser();

    }

    /**
     * Get User Data
     */
    getUser() {

        // Change data loading flag
        this.dataLoading = true;

        // Get books list (by BookHttp Service)
        this.http.read()
            .subscribe(
                response => {
                    // Retrieve Full HTTP Response
                    this.httpResponse = response.body;

                    // Retrieve "results" from response object
                    this.user_2 = this.httpResponse.user;
                },
                error => {
                    this.httpError = error;
                }
            )
            .add(() => {
                this.dataLoading = false;
                this.pageReady = true;
            });
    }

}
