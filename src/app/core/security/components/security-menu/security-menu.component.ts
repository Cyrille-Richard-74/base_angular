//======================================================================
// CORE / SECURITY / COMPONENTS / SECURITY-MENU
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//-----------------------------------------------------
// Import Modules's Components
//-----------------------------------------------------

/* Services */
import { AuthenticationService } from './../../services/authentication.service';

/* Interfaces */
import { UserInterface } from './../../interfaces/user.interface';



//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------

@Component({
    selector: 'security-menu',
    templateUrl: './security-menu.component.html'
})



//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class SecurityMenuComponent implements OnInit {

    user: UserInterface;

    constructor(
        private router: Router,
        private authentication: AuthenticationService
    ) { }


    ngOnInit() {

        /* Observe user data */
        this.authentication.user.subscribe((x: any) => {
            this.user = x;
        });

    }


    logout() {
        this.authentication.logout();
        this.router.navigate(['/login']);
    }

}
