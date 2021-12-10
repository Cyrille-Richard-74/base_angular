//======================================================================
// CORE / SECURITY / RENEW PASSWORD COMPONENT
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
import { RenewPasswordInterface } from './../../interfaces/renew-password.interface';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
    templateUrl: './renew-password.component.html'
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class RenewPasswordComponent implements OnInit {

    /* States */
    loading: boolean = false; // Data loading
    submitted: boolean = false; // When the submit button was clicked

    /* HTTP Request */
    // httpSubmission: boolean = false; // When the form is valid AND the submit button was clicked
    httpResponse: any = {};
    httpError: string = null;

    /* Passwords form */
    passwords: RenewPasswordInterface;
    renewPasswordForm: FormGroup;


    constructor(
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private authentication: AuthenticationService,
        private title: TitleService
    ) { }


    // Form listener
    get f() { return this.renewPasswordForm.controls; }


    ngOnInit() {

        // Set page title
        this.route.data.subscribe(data => {
            this.title.setTitle = data.title;
        });

        /* Form Builder */
        // Build the Reactive form Forgotten Password
        this.renewPasswordForm = this.fb.group({
            passwordOld: ['', Validators.required],
            passwordNew: ['', Validators.required],
            passwordConfirmation: ['', Validators.required]
        });

    }


    onSubmit() {

        // Chnage the "submitted" flag status
        this.submitted = true;

        // stop here if form is invalid
        if (this.renewPasswordForm.invalid) return;

        // Chnage the "httpSubmission" flag status
        this.loading = true;

        // Retrieve form data
        this.passwords = {
            passwordOld: this.f.passwordOld.value,
            passwordNew: this.f.passwordNew.value,
            passwordConfirmation: this.f.passwordConfirmation.value,
        };

        // Send the renewPasswordForm HTTP Request
        this.authentication.renewPassword(this.passwords).pipe(first()).subscribe(
            () => {
                this.router.navigate(['/profile']);
            },
            error => {
                this.httpError = error;
                this.loading = false;
            }
        );
    }

}
