//======================================================================
// CORE / SECURITY / REGISTER COMPONENT
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { RegistrationInterface } from './../../interfaces/registration.interface';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
    templateUrl: './register.component.html'
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class RegisterComponent implements OnInit {

    /* States */
    loading: boolean = false; // Data loading
    submitted: boolean = false; // When the submit button was clicked

    /* HTTP Request */
    // httpSubmission: boolean = false; // When the form is valid AND the submit button was clicked
    httpResponse: any = {};
    httpError: string = null;

    /* User / Register form */
    user: RegistrationInterface;
    registerForm: FormGroup;


    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private authentication: AuthenticationService,
        private title: TitleService
    ) { }


    // Form listener
    get f() { return this.registerForm.controls; }


    ngOnInit() {

        // Set page title
        this.route.data.subscribe(data => {
            this.title.setTitle = data.title;
        });

        /* Form Builder */
        // Build the Reactive form Register
        this.registerForm = this.fb.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            // TODO: Email format validator
            email: ['', Validators.required],
            // TODO: Password format validator
            password: ['', Validators.required]
        });

    }


    onSubmit() {

        // Chnage the "submitted" flag status
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) return;

        // Chnage the "httpSubmission" flag status
        this.loading = true;

        // Retrieve form data
        this.user = {
            firstname: this.f.firstname.value,
            lastname: this.f.lastname.value,
            email: this.f.email.value,
            password: this.f.password.value,
        };

        // Send the register HTTP Request
        this.authentication.registration(this.user).pipe(first()).subscribe(
            () => {
                this.router.navigate([`/login`]);
            },
            error => {
                this.httpError = error;
                this.loading = false;
            }
        );

    }

}
