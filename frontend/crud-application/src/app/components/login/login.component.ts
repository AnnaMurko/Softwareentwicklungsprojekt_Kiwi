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

    constructor(private loginService: RegistrationService, private userService:UserService,private router:Router) {}

    login() {
        if (this.username && this.password) {
            this.loginService.login(this.username, this.password).subscribe(
                () =>{ console.log('Anmeldung erfolgreich');
                    this.userService.setLoggedInUser(new User(this.username,this.password));
                  this.router.navigate(['/childs'])
                    },
                () => console.log('Anmeldung fehlgeschlagen')
            );
        }
    }

}







