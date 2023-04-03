import {Component, OnInit, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {RegistrationService} from "../../service/registration.service";
import {RegistrationUser} from "../../service/registrationUser";


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    user = new RegistrationUser();
    userForm: FormGroup;

    constructor(public formBuilder: FormBuilder,private _service: RegistrationService, private route: Router,private ngZone: NgZone) {
        this.userForm = this.formBuilder.group({
            emailId: [''],
            password: [''],
        });
    }

    ngOnInit() {
    }


    onLogin(): void {
        if (this.userForm.valid) {
            console.log("Hallo");
            console.log(this.userForm.get("username"));
            this.ngZone.run(() => this.route.navigateByUrl('/home'));
            this._service.loginUser(this.userForm.value).subscribe(() => {
                console.log("Hallo2");
                this.ngZone.run(() => this.route.navigateByUrl('/home'));
            });
        }
    }
}
