//======================================================================
// CORE / SECURITY / FORGOTTEN PASSWORD COMPONENT
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
import { ForgottenPasswordInterface } from './../../interfaces/forgotten-password.interface';


//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------
@Component({
    templateUrl: './forgotten-password.component.html'
})


//-----------------------------------------------------
// Class Export
//-----------------------------------------------------
export class ForgottenPasswordComponent implements OnInit {

    /* States */
    loading: boolean = false; // Data loading
    submitted: boolean = false; // When the submit button was clicked

    /* HTTP Request */
    // httpSubmission: boolean = false; // When the form is valid AND the submit button was clicked
    httpResponse: any = {};
    httpError: string = null;

    /* User / Register form */
    user: ForgottenPasswordInterface;
    forgottenPasswordForm: FormGroup;


    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private authentication: AuthenticationService,
        private title: TitleService
    ) { }


    // Form listener
    get f() { return this.forgottenPasswordForm.controls; }


    ngOnInit() {

        // Set page title
        this.route.data.subscribe(data => {
            this.title.setTitle = data.title;
        });

        /* Form Builder */
        // Build the Reactive form Forgotten Password
        this.forgottenPasswordForm = this.fb.group({
            email: ['', Validators.required]
        });

    }


    onSubmit() {

        // Chnage the "submitted" flag status
        this.submitted = true;

        // stop here if form is invalid
        if (this.forgottenPasswordForm.invalid) return;

        // Chnage the "httpSubmission" flag status
        this.loading = true;

        // Retrieve form data
        this.user = {
            email: this.f.email.value
        };

        // Send the forgottenPassword HTTP Request
        this.authentication.forgottenPassword(this.user).pipe(first()).subscribe(
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
