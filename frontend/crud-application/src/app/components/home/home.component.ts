import {Component, OnInit, NgZone} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {RegistrationService} from "../../service/registration.service";
import {RegistrationUser} from "../../service/registrationUser";


@Component({
    selector: 'login',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    user = new RegistrationUser();

    constructor(private _service: RegistrationService, private route: Router) {
    }


    ngOnInit() {
    }


}