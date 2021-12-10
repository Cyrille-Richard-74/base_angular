//======================================================================
// CORE / SECURITY
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//-----------------------------------------------------
// Import Project's components
//-----------------------------------------------------

/* HTTP Interceptors */
import { HttpToken } from './../interceptors/http-token.interceptor';

//-----------------------------------------------------
// Import Module's components
//-----------------------------------------------------

/* Routing */
import { SecurityRoutingModule } from './security-routing.module';

/* Pages components */
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgottenPasswordComponent } from './components/forgotten-password/forgotten-password.component';
import { RenewPasswordComponent } from './components/renew-password/renew-password.component';
import { ProfileComponent } from './components/profile/profile.component';

import { SecurityMenuComponent } from './components/security-menu/security-menu.component';


//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------
@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent,
        ForgottenPasswordComponent,
        RenewPasswordComponent,
        ProfileComponent,
        SecurityMenuComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        SecurityRoutingModule
    ],
    exports: [
        SecurityMenuComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpToken, multi: true }
    ]
})


//-----------------------------------------------------
// Class Export
//-----------------------------------------------------
export class SecurityModule { }
