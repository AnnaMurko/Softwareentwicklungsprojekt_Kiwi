import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Attendant} from "../../service/Attendant";
import {AttendantService} from "../../service/attendant.service";
import {Router} from "@angular/router";
import {CrudService} from "../../service/crud.service";
import {Child} from "../../service/Child";

@Component({
    selector: 'app-allAttendants',
    templateUrl: './allAttendants.component.html',
    styleUrls: ['./allAttendants.component.scss']
})
export class AllAttendantsComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';
    attendants: Attendant[] = [];
    errorMessage: string = '';

    constructor(
        private crudService:CrudService,
        private attendantService:AttendantService,
        private http: HttpClient,
        private cd: ChangeDetectorRef,
        private router: Router
    ) { }

    ngOnInit() {
        this.loadAttendants();
    }

    addEducator() {
        this.router.navigate(['/addAttendant']);
    }

    isAdmin(attendant: Attendant): boolean {
        return attendant.admin;
    }

    loadAttendants() {
        this.http.get<Attendant[]>(`${this.REST_API}/attendants`).subscribe(attendants => {
            this.attendants = this.getAllAttendants(attendants);
            this.cd.detectChanges();
        });
    }

    getAllAttendants(attendants: Attendant[]): Attendant[] {
        return [...attendants];
    }

    editEducator(index: number) {
        const selectedEducator = this.attendants[index];
        sessionStorage.setItem('updateAttendant', JSON.stringify(selectedEducator));
        this.router.navigate(['/updateAttendant']);
    }

    deleteEducator(id: any, i: any) {
        this.crudService.getChildren().subscribe(children => {
            if(children.some(child => child.attendantId === id)) {
                this.errorMessage = 'Betreuer kann nicht gelöscht werden, da sie verbundene Kinder haben.';
                return;
            }

            if (window.confirm('Do you want to go ahead?')) {
                this.crudService.deleteAttendant(id).subscribe(() => {
                    this.attendants.splice(i, 1);
                });
            }
        });
    }
}
