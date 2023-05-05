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
    child = new Child(0, '', Number(''));
    users: User[] = [];
    selectedUser: User | undefined;
    error: string = '';

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
            this.selectedUser = this.users[0]; // set the default selected user to the first user in the array
        });

        console.log(this.users);
    }

    addChild() {

        // @ts-ignore
        console.log(this.selectedUser.username);

        this.crudService.getChilds().subscribe((res: any) => {
            console.log(res);
            // check if the new child name already exists in the list of children
            const childExists = res.some((child: { name: string; }) => child.name === this.child.name);
            if (childExists) {
                this.error = "Error: Kind mit diesem Namen existiert bereits";
                return;
            }

            this.crudService.addChild(this.child).subscribe(
                () => {
                    console.log("erfolg");
                },
                (error) => {
                    console.error('Error creating child:', error);
                }
            );
        });
    }
}
