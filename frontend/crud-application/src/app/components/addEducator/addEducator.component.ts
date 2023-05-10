import { Component } from '@angular/core';
import { User } from "../../service/User";
import { RegistrationService } from "../../service/registration.service";
import {CrudService} from "../../service/crud.service";

@Component({
    selector: 'app-addEducator',
    templateUrl: './addEducator.component.html',
    styleUrls: ['./addEducator.component.scss'],
})
export class AddEducatorComponent {
    user = new User('', '', Number(''), false);
    error: string = '';
    success: string = '';

    constructor(private crudService: CrudService,private registrationService: RegistrationService) {}

    createUser() {
        this.registrationService.getUsers().subscribe(
            (users) => {
                const existingUser = users.find(user => user.username === this.user.username);
                if (existingUser) {
                    this.error = 'Benutzer existiert bereits';
                    this.success = '';
                } else {
                    this.crudService.addUser(this.user).subscribe(
                        () => {
                            console.log("erfolg");
                            this.success = "Benutzer erfolgreich erstellt!";
                            this.error = '';
                        },
                        (error) => {
                            console.error('Error creating user:', error);
                        }
                    );
                }
            },
            (error) => {
                console.error('Error retrieving users:', error);
            }
        );
    }

}
