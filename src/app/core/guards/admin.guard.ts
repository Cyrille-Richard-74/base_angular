//======================================================================
// CORE / GUARDS : ADMIN
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------
@Injectable({
    providedIn: 'root'
})


//-----------------------------------------------------
// Class Export
//-----------------------------------------------------

export class AdminGuard implements CanActivate {

    canActivate() {

        // Retrieve current User properties

        // Check if the current user has role "ADMIN"
        // if (user.role === "ADMIN") return true;

        // Redirect user to the page 403
        // this.router.navigate(['/403'])

        return false;
    }
}
