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
    }
    constructor(private loginService: RegistrationService, private userService: UserService, private router: Router) {
    }
    login() {
        if (this.username && this.password) {

            this.loginService.getUserID(this.username).subscribe(
                (response: any) => {
                    console.log('API-Antwort:', response);
                    if (response) {
                        const user = new User(this.username, this.password, response);
                        this.userService.setLoggedInUser(user);
                        const userString = JSON.stringify(user);
                        sessionStorage.setItem('loggedInUser', userString);
                        console.log(this.userService.getLoggedInUser());
                        this.router.navigate(['/childs']);
                    } else {
                        console.log('Ungültige Antwort: userID nicht gefunden');
                    }
                },
                (error) => console.log('Fehler beim Abrufen der Benutzer-ID', error)
            );
        }
    }}


