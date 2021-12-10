//======================================================================
// CORE / SECURITY / ROUTING
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//-----------------------------------------------------
// Import Project's components
//-----------------------------------------------------

/* Guards */
import { AuthGuard } from './../guards/auth.guard';
import { NoAuthGuard } from './../guards/no-auth.guard';

//-----------------------------------------------------
// Import Module's components
//-----------------------------------------------------

/* Pages components */
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgottenPasswordComponent } from './components/forgotten-password/forgotten-password.component';
import { RenewPasswordComponent } from './components/renew-password/renew-password.component';
import { ProfileComponent } from './components/profile/profile.component';


//-----------------------------------------------------
// Constantes Definition
//-----------------------------------------------------
const routes: Routes = [
    /* Register */
    {
        path: 'register',
        pathMatch: 'full',
        component: RegisterComponent,
        data: { title: 'Register' }
    },

    /* Login */
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent,
        data: { title: 'Login' }
    },

    /* Forgotten Password */
    {
        path: 'forgotten-password',
        pathMatch: 'full',
        component: ForgottenPasswordComponent,
        data: { title: 'Forgotten Password' }
    },

    /* Renew Password */
    {
        path: 'renew-password',
        pathMatch: 'full',
        component: RenewPasswordComponent,
        canActivate: [AuthGuard],
        data: { title: 'Password Renewal' }
    },

    /* User Profile */
    {
        path: 'profile',
        pathMatch: 'full',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data: { title: 'Account' }
    }
];


//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


//-----------------------------------------------------
// Class Export
//-----------------------------------------------------
export class SecurityRoutingModule { }
