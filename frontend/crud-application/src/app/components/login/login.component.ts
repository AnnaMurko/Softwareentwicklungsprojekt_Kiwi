import { Component, OnInit, NgZone } from '@angular/core';
import {RegistrationService} from "../../service/registration.service";
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {User} from "../../service/User";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    username!: string;
    password!: string;
    ngOnInit() {
       sessionStorage.removeItem('loggedInUser');
        sessionStorage.removeItem('array');

    }
    constructor(private loginService: RegistrationService, private userService: UserService, private router: Router) {
    }
    login() {
        if (this.username && this.password) {
            this.loginService.getUserID(this.username).subscribe(
                (userId: number) => {
                    console.log('UserID:', userId);
                    if (userId) {
                        this.loginService.getUserAdminBoolean(this.username).subscribe(
                            // @ts-ignore
                            (admin: boolean) => {
                                console.log('admin:', admin);
                                const user = new User(this.username, this.password, userId, admin);
                                this.userService.setLoggedInUser(user);
                                const userString = JSON.stringify(user);
                                sessionStorage.setItem('loggedInUser', userString);
                                console.log(this.userService.getLoggedInUser());
                                this.router.navigate(['/childs']);
                            },
                            (error) => console.log('Fehler beim Abrufen von isAdmin', error)
                        );
                    } else {
                        console.log('Ungültige Antwort: userID nicht gefunden');
                    }
                },
                (error) => console.log('Fehler beim Abrufen der Benutzer-ID', error)
            );
        }
    }
}


