import { Component } from '@angular/core';
import { Attendant } from "../../service/Attendant";
import { Router } from "@angular/router";
import { CrudService } from "../../service/crud.service";

@Component({
    selector: 'app-updateAttendant',
    templateUrl: './updateAttendant.component.html',
    styleUrls: ['./updateAttendant.component.scss']
})
export class UpdateAttendantComponent {
    selectedAttendant: Attendant;
    error: string = '';
    success: string = '';
    updatedAttendant = new Attendant('', '', Number(''), false);

    constructor(
        private router: Router,
        private crudService: CrudService
    ) {
        const editAttendantString = sessionStorage.getItem('editAttendant');
        const editAttendant = JSON.parse(editAttendantString as string) as Attendant;
        this.selectedAttendant = editAttendant;
    }

    updateAttendant() {
        this.crudService.getAttendants().subscribe((res: Attendant[]) => {
            const attendantExists = res.some((attendant: Attendant) => attendant.name === this.selectedAttendant.name && attendant._id !== this.selectedAttendant._id);

            if (attendantExists) {
                this.error = "Benutzer mit diesem Benutzernamen existiert bereits!";
                this.success = '';
                return;
            }

            if (this.attendantUnchanged()) {
                this.error = "Keine Änderungen!";
                this.success = '';
                return;
            }

            this.updatedAttendant = new Attendant(
                this.selectedAttendant.name,
                this.selectedAttendant.password,
                this.selectedAttendant._id,
                this.selectedAttendant.admin
            );

            this.crudService.updateEducator(this.updatedAttendant._id, this.updatedAttendant).subscribe(
                () => {
                    this.error = '';
                    this.success = "Benutzer erfolgreich aktualisiert!";
                    sessionStorage.setItem('editEducator', JSON.stringify(this.selectedAttendant));
                },
                (error) => {
                    console.error('Error updating attendant:', error);
                }
            );
        });
    }

    attendantUnchanged(): boolean {
        return (
            this.selectedAttendant.admin === this.updatedAttendant.admin &&
            this.selectedAttendant.password === this.updatedAttendant.password &&
            this.selectedAttendant.name === this.updatedAttendant.name
        );
    }
}
