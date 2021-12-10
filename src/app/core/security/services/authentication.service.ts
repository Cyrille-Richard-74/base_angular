//======================================================================
// CORE / AUTHENTICATION : AUTHENTICATION SERVICE
//======================================================================

//-----------------------------------------------------
// Import Angular Dependancies
//-----------------------------------------------------
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//-----------------------------------------------------
// Import Project's components
//-----------------------------------------------------

/* Interfaces */
import { UserInterface } from '../interfaces/user.interface';
import { RegistrationInterface } from '../interfaces/registration.interface';
import { LoginInterface } from '../interfaces/login.interface';
import { ForgottenPasswordInterface } from '../interfaces/forgotten-password.interface';
import { RenewPasswordInterface } from '../interfaces/renew-password.interface';

/* Services */
import { ApiService } from './../../http/api.service';


//-----------------------------------------------------
// Class Decorator
//-----------------------------------------------------
@Injectable({
    providedIn: 'root'
})


//-----------------------------------------------------
// Class Export
//-----------------------------------------------------
export class AuthenticationService {

    private tokenSubject: BehaviorSubject<string>;
    public token: Observable<string>;

    private userSubject: BehaviorSubject<UserInterface>;
    public user: Observable<UserInterface>;

    constructor(
        private api: ApiService
    ) {
        this.tokenSubject = new BehaviorSubject<string>(localStorage.getItem('token'));
        this.token = this.tokenSubject.asObservable();

        this.userSubject = new BehaviorSubject<UserInterface>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    /**
     * Observe User values
     */
    public get getToken(): string {
        return this.tokenSubject.value;
    }

    /**
     * Observe User values
     */
    public get getUser(): UserInterface {
        return this.userSubject.value;
    }

    /**
     * HTTP Request to register a new user
     * 
     * url: /api/registration
     */
    registration(user: RegistrationInterface) {

        return this.api.post('registration', user).pipe(map(response => {
            return response;
        }));

    }

    /**
     * HTTP Request to authenticate a user
     * 
     * url: /api/login
     */
    login(user: LoginInterface) {

        return this.api.post('login', user).pipe(map(session => {

            if (session && session.token) {
                localStorage.setItem('token', session.token);
                this.tokenSubject.next(session.token);

                localStorage.setItem('user', JSON.stringify(session.user));
                this.userSubject.next(session.user);
            }

            return user;
        }));

    }

    /**
     * Destroy the user local storage
     */
    logout() {

        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.userSubject.next(null);

    }

    /**
     * HTTP Request to retrieve password process
     */
    forgottenPassword(user: ForgottenPasswordInterface) {

        return this.api.post('forgotten-password', user).pipe(map(response => {
            return response;
        }));

    }

    /**
     * HTTP Request to renew password
     */
    renewPassword(passwords: RenewPasswordInterface) {

        return this.api.post('renew-password', passwords).pipe(map(response => {
            return response;
        }));

    }
}
