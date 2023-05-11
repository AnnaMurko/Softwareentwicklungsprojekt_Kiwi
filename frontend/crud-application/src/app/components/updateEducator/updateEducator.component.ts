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
    annaUser = new User('', '', Number(''), false);
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
            const editUser = sessionStorage.getItem('editEducator');
            // @ts-ignore
            const user = JSON.parse(editUser) as User;
            if (userExists && user.username!==this.selectedUser.username ) {
                this.error = "Benutzer mit diesem Benutzernamen existiert bereits!";
                this.success = '';
                return;
            }
            if(this.selectedUser.admin===user.admin&&this.selectedUser.password===user.password&&this.selectedUser.username===user.username)
            {
                this.error = "Keine Änderungen!";
                this.success = '';
                return;
            }
console.log(this.selectedUser);
            this.annaUser = new User(this.selectedUser.username, this.selectedUser.password
                , this.selectedUser.id, this.selectedUser.admin);
            console.log(this.annaUser);
            this.crudService.updateEducator(this.annaUser._id, this.annaUser).subscribe(
                () => {
                    this.error = '';
                    console.log("erfolg");
                    this.success = "Benutzer erfolgreich aktualisiert!";
                    sessionStorage.setItem('editEducator', JSON.stringify(this.selectedUser));
                },
                (error) => {
                    console.error('Error updating user:', error);
                }
            );
        });
    }
}
