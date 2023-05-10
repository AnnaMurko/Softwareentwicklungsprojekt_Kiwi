import { Component } from '@angular/core';
import { Child } from "../../service/Child";
import { Router } from "@angular/router";
import { ChildService } from "../../service/child.service";
import { CrudService } from "../../service/crud.service";
import {User} from "../../service/User";

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
            // check if the new child name already exists in the list of children
            const childExists = res.some((child: { name: string; }) => child.name === this.selectedChild.name);
            if (childExists) {
                this.error = "Kind mit diesem Namen existiert bereits!";
                this.success = '';
                return;
            }

            this.crudService.updateChild(this.selectedChild.id, this.selectedChild).subscribe(
            () => {
                console.log("erfolg");
                this.success = "Kind erfolgreich aktualisiert!";
                this.error = '';
            },
            (error) => {
                console.error('Error updating child:', error);
            }
        );
        });
    }
}
