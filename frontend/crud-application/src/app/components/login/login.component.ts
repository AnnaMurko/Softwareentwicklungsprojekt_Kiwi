import { Component, OnInit, NgZone } from '@angular/core';
import {RegistrationService} from "../../service/registration.service";
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    username!: string;
    password!: string;

    constructor(private loginService: RegistrationService, private router:Router) {}

    login() {
        if (this.username && this.password) {
            this.loginService.login(this.username, this.password).subscribe(
                () =>{ console.log('Anmeldung erfolgreich');
                    this.router.navigate(['/home']);},
                () => console.log('Anmeldung fehlgeschlagen')
            );
        }
    }

}







