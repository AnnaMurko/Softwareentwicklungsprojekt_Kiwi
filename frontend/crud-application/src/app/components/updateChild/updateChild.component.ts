import { Component } from '@angular/core';
import { Child } from "../../service/Child";
import { Router } from "@angular/router";

import { CrudService } from "../../service/crud.service";
import {ChildService} from "../../service/child.service";
import {Attendant} from "../../service/Attendant";

@Component({
    selector: 'app-updateChild',
    templateUrl: './updateChild.component.html',
    styleUrls: ['./updateChild.component.scss']
})
export class UpdateChildComponent {
    selectedChild: Child;
    error: string = '';
    success: string = '';

    attendants: Attendant[] = [];

    constructor(
        private router: Router,
        private childService: ChildService,
        private crudService: CrudService
    ) {
        const editChild = sessionStorage.getItem('editChild');
        // @ts-ignore
        const child = JSON.parse(editChild) as Child;
        this.selectedChild = child;

        this.crudService.getAttendants().subscribe(
            (data) => {
                // @ts-ignore
                this.attendants = data;
            },
            (error) => {
                console.error('Error fetching attendants:', error);
            }
        );
    }

    updateChild() {
        // Update the selected child using the crudService
        console.log(this.selectedChild);
        console.log(this.selectedChild.id);

        this.crudService.getChildren().subscribe((res: any) => {
            console.log(res);

              const childExists = res.some((child: { name: string; childId: string; }) => child.name === this.selectedChild.name);

            const editChild = sessionStorage.getItem('editChild');
            // @ts-ignore
            const child = JSON.parse(editChild) as Child;
            if (childExists && child.name!==this.selectedChild.name) {

                this.error = "Kind mit diesem Namen existiert bereits!";
                this.success = '';
                return;
            }
            if(childExists&&child.name===this.selectedChild.name&& child.attendantId===this.selectedChild.attendantId)
            {
                this.error = "Keine Änderungen!";
                this.success = '';
                return;
            }

            this.crudService.updateChild(this.selectedChild.id, this.selectedChild).subscribe(
                () => {
                    console.log("erfolg");
                    this.success = "Kind erfolgreich aktualisiert!";
                    sessionStorage.setItem('editChild', JSON.stringify(this.selectedChild));
                    this.error = '';
                },
                (error) => {
                    console.error('Error updating child:', error);
                }
            );
        });
    }
}
