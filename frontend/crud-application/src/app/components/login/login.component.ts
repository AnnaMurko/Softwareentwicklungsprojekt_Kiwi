import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import {AttendantService} from "../../service/attendant.service";
import {Attendant} from "../../service/Attendant";
import {LoginService} from "../../service/login.service";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    name!: string;
    password!: string;
    ngOnInit() {
       sessionStorage.removeItem('loggedInUser');
        sessionStorage.removeItem('valuation');

    }
    constructor(private loginService: LoginService, private userService: AttendantService, private router: Router) {
    }
    login() {
        if (this.name && this.password) {
            console.log("hALLO");
            this.loginService.getAttendantID(this.name).subscribe(
                (attendantId: number) => {
                    console.log('UserID:', attendantId);
                    if (attendantId) {
                        this.loginService.getAttendantAdminBoolean(this.name).subscribe(
                            // @ts-ignore
                            (admin: boolean) => {
                                console.log('admin:', admin);
                                const user = new Attendant(this.name, this.password, attendantId, admin);
                                this.userService.setLoggedInAttendant(user);
                                const userString = JSON.stringify(user);
                                sessionStorage.setItem('loggedInAttendant', userString);
                                console.log(this.userService.getLoggedInAttendant());
                                this.router.navigate(['/allChildren']);
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


