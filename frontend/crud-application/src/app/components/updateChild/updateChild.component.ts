import { Component } from '@angular/core';
import { Child } from "../../service/Child";
import { Router } from "@angular/router";
import { ChildService } from "../../service/child.service";
import { CrudService } from "../../service/crud.service";
import { User } from "../../service/User";

@Component({
    selector: 'app-updateChild',
    templateUrl: './updateChild.component.html',
    styleUrls: ['./updateChild.component.scss']
})
export class UpdateChildComponent {
    selectedChild: Child;
    error: string = '';
    success: string = '';

    users: User[] = [];

    constructor(
        private router: Router,
        private childService: ChildService,
        private crudService: CrudService
    ) {
        const editChild = sessionStorage.getItem('editChild');
        // @ts-ignore
        const child = JSON.parse(editChild) as Child;
        this.selectedChild = child;

        // Fetch the list of users to populate the select input
        this.crudService.getUsers().subscribe(
            (data) => {
                // @ts-ignore
                this.users = data;
            },
            (error) => {
                console.error('Error fetching users:', error);
            }
        );
    }

    updateChild() {
        // Update the selected child using the crudService
        console.log(this.selectedChild);
        console.log(this.selectedChild.id);

        this.crudService.getChilds().subscribe((res: any) => {
            console.log(res);

            // Check if the new child name already exists in the list of children, excluding the currently edited child
            const childExists = res.some((child: { name: string; childId: string; }) => child.name === this.selectedChild.name);

            const editChild = sessionStorage.getItem('editChild');
            // @ts-ignore
            const child = JSON.parse(editChild) as Child;
            if (childExists && child.name!==this.selectedChild.name) {

                this.error = "Kind mit diesem Namen existiert bereits!";
                this.success = '';
                return;
            }
            if(childExists&&child.name===this.selectedChild.name&& child.userId===this.selectedChild.userId)
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