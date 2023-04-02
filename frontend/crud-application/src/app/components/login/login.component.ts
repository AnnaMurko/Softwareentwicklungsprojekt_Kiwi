import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import {RegistrationService} from "../../service/registration.service";
import {RegistrationUser} from "../../service/registrationUser";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user= new RegistrationUser();

 constructor(private _service: RegistrationService) {
 }

  ngOnInit() {}

  onSubmit()
  {
this._service.loginUserFromRemote(this.user).subscribe(
    data=>console.log("hallo anna"),
    error=> console.log("exception anna")
)};
}
