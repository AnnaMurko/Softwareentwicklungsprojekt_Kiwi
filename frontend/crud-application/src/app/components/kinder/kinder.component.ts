import { Component, OnInit, NgZone } from '@angular/core';
import {RegistrationService} from "../../service/registration.service";
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router} from "@angular/router";
import {KinderService} from "../../service/kinder.service";

@Component({
    selector: 'app-kinder',
    templateUrl: './kinder.component.html',
    styleUrls: ['./kinder.component.scss']
})export class KinderComponent implements OnInit {
    Kinder: any = [];

    constructor(private kinderService: KinderService) {}

    ngOnInit(): void {
        this.kinderService.GetKinder().subscribe((res: any) => {
            console.log(res);
            this.Kinder = res;
        });
    }
}




