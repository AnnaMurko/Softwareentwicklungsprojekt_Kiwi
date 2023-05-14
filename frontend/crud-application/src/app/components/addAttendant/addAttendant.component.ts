import { Component } from '@angular/core';
import { Attendant } from "../../service/Attendant";
import { LoginService } from "../../service/login.service";
import { CrudService } from "../../service/crud.service";

@Component({
    selector: 'app-addAttendant',
    templateUrl: './addAttendant.component.html',
    styleUrls: ['./addAttendant.component.scss'],
})
export class AddAttendantComponent {
    attendant = new Attendant('', '', Number(''), false);
    error: string = '';
    success: string = '';

    constructor(private crudService: CrudService, private registrationService: LoginService) {}

    createAttendant() {
        this.registrationService.getAttendants().subscribe(
            (attendants) => {
                const existingAttendant = attendants.find(attendant => attendant.name === this.attendant.name);
                if (existingAttendant) {
                    this.error = 'Benutzer existiert bereits!';
                    this.success = '';
                } else {
                    this.crudService.addAttendant(this.attendant).subscribe(
                        () => {
                            this.success = "Benutzer erfolgreich erstellt!";
                            this.error = '';
                        },
                        () => {
                            this.error = 'Fehler beim Erstellen des Benutzers!';
                        }
                    );
                }
            },
            () => {
                this.error = 'Fehler beim Abrufen der Benutzer!';
            }
        );
    }
}
