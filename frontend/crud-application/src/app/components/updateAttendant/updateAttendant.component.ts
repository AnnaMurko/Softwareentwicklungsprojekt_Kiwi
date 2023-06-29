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
    attendant = new Attendant('', '', Number(''), false);
    constructor(
        private router: Router,
        private crudService: CrudService
    ) {
        const editAttendant = sessionStorage.getItem('updateAttendant');
        // @ts-ignore
        const user = JSON.parse(editAttendant) as Attendant;
        this.selectedAttendant = user;
    }

    updateAttendant() {

        this.crudService.getAttendants().subscribe((res: any) => {
            const userExists = res.some((user: { name: string; }) => user.name === this.selectedAttendant.username);
            const editAttendant = sessionStorage.getItem('updateAttendant');
            // @ts-ignore
            const user = JSON.parse(editAttendant) as Attendant;
            if (userExists && user.username!==this.selectedAttendant.username ) {
                this.error = "Benutzer mit diesem Benutzernamen existiert bereits!";
                this.success = '';
                return;
            }
            if(this.selectedAttendant.admin===user.admin&&this.selectedAttendant.password===user.password&&this.selectedAttendant.username===user.username)
            {
                this.error = "Keine Änderungen!";
                this.success = '';
                return;
            }
            this.attendant = new Attendant(this.selectedAttendant.username, this.selectedAttendant.password
                , this.selectedAttendant.id, this.selectedAttendant.admin);
            this.crudService.updateEducator(this.attendant._id, this.attendant).subscribe(
                () => {
                    this.error = '';
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