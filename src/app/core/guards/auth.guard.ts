//======================================================================
// CORE / GUARDS : AUTH
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//-----------------------------------------------------
// Import Porject's components
//-----------------------------------------------------

/* Services */
import { AuthenticationService } from './../security/services/authentication.service';


//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------
@Injectable({
    providedIn: 'root'
})


//-----------------------------------------------------
// Class Export
//-----------------------------------------------------
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        // Retrieve current User properties
        const user = this.authenticationService.getUser;

        // return true if user is already authenticated
        if (user) return true;

        // or redirect user to the login page
        // The "login" route is defined on security-routing.module.ts
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

        return false;
    }

}
