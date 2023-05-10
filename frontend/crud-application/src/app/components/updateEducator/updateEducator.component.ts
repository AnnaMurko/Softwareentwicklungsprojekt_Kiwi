import { Component } from '@angular/core';
import { User } from "../../service/User";
import { Router } from "@angular/router";
import { CrudService } from "../../service/crud.service";

@Component({
    selector: 'app-updateEducator',
    templateUrl: './updateEducator.component.html',
    styleUrls: ['./updateEducator.component.scss']
})
export class UpdateEducatorComponent {
    selectedUser: User;
    error: string = '';
    success: string = '';

    constructor(
        private router: Router,
        private crudService: CrudService
    ) {
        const editUser = sessionStorage.getItem('editEducator');
        // @ts-ignore
        const user = JSON.parse(editUser) as User;
        this.selectedUser = user;
    }

    updateUser() {
        // Update the selected user using the crudService
        console.log(this.selectedUser);
        console.log(this.selectedUser.id);

        this.crudService.getUsers().subscribe((res: any) => {
            console.log(res);
            // check if the new username already exists in the list of users
            const userExists = res.some((user: { username: string; }) => user.username === this.selectedUser.username);
            if (userExists) {
                this.error = "Benutzer mit diesem Benutzernamen existiert bereits!";
                this.success = '';

                return;
            }

            this.crudService.updateEducator(this.selectedUser.id, this.selectedUser).subscribe(
                () => {
                    this.error = '';
                    console.log("erfolg");
                    this.success = "Benutzer erfolgreich aktualisiert!";

                },
                (error) => {
                    console.error('Error updating user:', error);
                }
            );
        });
    }
}
