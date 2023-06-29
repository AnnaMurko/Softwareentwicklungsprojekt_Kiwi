import { Component } from '@angular/core';
import { Child } from "../../service/Child";
import { Router } from "@angular/router";
import { CrudService } from "../../service/crud.service";
import { AttendantService } from "../../service/attendant.service";
import { Attendant } from "../../service/Attendant";
import { LoginService } from "../../service/login.service";

@Component({
    selector: 'app-addChild',
    templateUrl: './addChild.component.html',
    styleUrls: ['./addChild.component.scss']
})
export class AddChildComponent {
    child = new Child(0, '','', new Date(), '','', Number(''));
    attendants: Attendant[] = [];
    selectedAttendant: Attendant | undefined;
    error: string = '';
    success: string = '';

    constructor(
        private router: Router,
        private crudService: CrudService,
        private attendantService: AttendantService,
        private registrationService: LoginService
    ) {
        this.loadAttendants();
    }

    loadAttendants() {
        this.registrationService.getAttendants().subscribe((res: any) => {
            this.attendants = res;
            this.selectedAttendant = this.attendants[0];
        });
    }

    addChild() {
        this.crudService.getChildren().subscribe((res: any) => {
            const childExists = res.some((child: { firstName: string; lastName: string; childId: string; }) => child.firstName === this.child.firstName && child.lastName === this.child.lastName);

            if (childExists) {
                this.error = "Kind mit diesem Namen existiert bereits!";
                this.success = '';
                return;
            }
            this.crudService.addChild(this.child).subscribe(
                () => {
                    this.success = "Erfolgreich gespeichert!";
                    this.error = '';
                },
                () => {
                    this.error = 'Fehler beim Erstellen des Kindes!';
                }
            );
        });
    }
}
