import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { CrudService } from "../../service/crud.service";
import {Attendant} from "../../service/Attendant";

@Component({
    selector: 'app-updateEducator',
    templateUrl: './updateAttendant.component.html',
    styleUrls: ['./updateAttendant.component.scss']
})
export class UpdateAttendantComponent {
    selectedAttendant: Attendant;
    error: string = '';
    success: string = '';
    annaAttendant = new Attendant('', '', Number(''), false);
    constructor(
        private router: Router,
        private crudService: CrudService
    ) {
        const editAttendant = sessionStorage.getItem('updateAttendant');
        // @ts-ignore
        const user = JSON.parse(editAttendant) as Attendant;
        console.log(user);
        this.selectedAttendant = user;
    }

    updateAttendant() {
        // Update the selected user using the crudService
        console.log(this.selectedAttendant);
        console.log(this.selectedAttendant.id);

        this.crudService.getAttendants().subscribe((res: any) => {
            console.log(res);
            // check if the new username already exists in the list of users

            console.log(this.selectedAttendant.name);
            const userExists = res.some((user: { name: string; }) => user.name === this.selectedAttendant.name);
            const editAttendant = sessionStorage.getItem('updateAttendant');
            // @ts-ignore
            const user = JSON.parse(editAttendant) as Attendant;
            if (userExists && user.name!==this.selectedAttendant.name ) {
                this.error = "Benutzer mit diesem Benutzernamen existiert bereits!";
                this.success = '';
                return;
            }
            if(this.selectedAttendant.admin===user.admin&&this.selectedAttendant.password===user.password&&this.selectedAttendant.name===user.name)
            {
                this.error = "Keine Änderungen!";
                this.success = '';
                return;
            }
            console.log(this.selectedAttendant);
            this.annaAttendant = new Attendant(this.selectedAttendant.name, this.selectedAttendant.password
                , this.selectedAttendant.id, this.selectedAttendant.admin);
            console.log(this.annaAttendant);
            this.crudService.updateEducator(this.annaAttendant._id, this.annaAttendant).subscribe(
                () => {
                    this.error = '';
                    console.log("erfolg");
                    this.success = "Benutzer erfolgreich aktualisiert!";
                    sessionStorage.setItem('updateAttendant', JSON.stringify(this.selectedAttendant));
                },
                (error) => {
                    console.error('Error updating user:', error);
                }
            );
        });
    }
}