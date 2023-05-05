// In addChild.component.ts
import { Component } from '@angular/core';
import { Child } from "../../service/Child";
import { Router } from "@angular/router";
import { CrudService } from "../../service/crud.service";
import { UserService } from "../../service/user.service";
import { User } from "../../service/User";
import {RegistrationService} from "../../service/registration.service";

@Component({
    selector: 'app-addChild',
    templateUrl: './addChild.component.html',
    styleUrls: ['./addChild.component.scss']
})
export class AddChildComponent {
    child = new Child(0, '', 1);
    users: User[] = [];

    constructor(
        private router: Router,
        private crudService: CrudService,
        private userService: UserService,
        private registrationService:RegistrationService
    ) {
        this.loadUsers();
    }

    loadUsers() {
            this.registrationService.getUsers().subscribe((res: any) => {
                console.log(res);
                this.users = res;
            });

        console.log(this.users);
    }


    addChild() {
        this.crudService.addChild(this.child).subscribe(
            () => {
               console.log("erfolg");
            },
            (error) => {
                console.error('Error creating child:', error);
            }
        );
    }
}
