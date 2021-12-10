//======================================================================
// CORE / GUARDS : NO-AUTH
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
export class NoAuthGuard implements CanActivate {

    canActivate() {
        return true;
    }
}
