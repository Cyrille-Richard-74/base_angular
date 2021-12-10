//======================================================================
// CORE / SECURITY / LOGIN COMPONENT
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

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

/* Interfaces */
import { LoginInterface } from './../../interfaces/login.interface';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
    templateUrl: './login.component.html'
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class LoginComponent implements OnInit {

    /* States */
    loading: boolean = false; // Data loading
    submitted: boolean = false; // When the submit button was clicked

    /* HTTP Request */
    // httpSubmission: boolean = false; // When the form is valid AND the submit button was clicked
    httpResponse: any = {};
    httpError: string = null;

    /* User / Register form */
    user: LoginInterface;
    loginForm: FormGroup;

    returnUrl: string = '';


    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authentication: AuthenticationService,
        private title: TitleService
    ) { }


    // Form listener
    get f() { return this.loginForm.controls; }


    ngOnInit() {

        // Set page title
        this.route.data.subscribe(data => {
            this.title.setTitle = data.title;
        });

        /* Form Builder */
        // Build the Reactive form Login
        this.loginForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        /* reset login status */
        // When user is already logged in and he want to show the login page
        this.authentication.logout();

        /* Return URL */
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    }


    onSubmit() {

        // Chnage the "submitted" flag status
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) return;

        // Chnage the "httpSubmission" flag status
        this.loading = true;

        // Retrieve form data
        this.user = {
            email: this.f.email.value,
            password: this.f.password.value
        };

        // Send the login HTTP Request
        this.authentication.login(this.user).pipe(first()).subscribe(
            response => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.httpError = error;
                this.loading = false;
            }
        );

    }

}
