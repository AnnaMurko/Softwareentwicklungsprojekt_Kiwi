import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Child } from "../../service/Child";
import { AttendantService } from "../../service/attendant.service";
import { Router } from "@angular/router";
import { CrudService } from "../../service/crud.service";
import { Valuation } from "../../service/Valuation";

@Component({
    selector: 'app-valuation',
    templateUrl: './valuation.component.html',
    styleUrls: ['./valuation.component.scss']
})
export class ValuationComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';

    child!: Child;

    constructor(
        private crudService: CrudService,
        private userService: AttendantService,
        private http: HttpClient,
        private cd: ChangeDetectorRef,
        private router: Router
    ) {}

    ngOnInit() {
        const childToBeRatedString = sessionStorage.getItem('ChildToBeRated');
        this.child = JSON.parse(childToBeRatedString as string) as Child;
    }

    finish() {
        const entity: (string | null)[] = [];
        // @ts-ignore
        const valuation: Valuation = new Valuation();

        for (let i = 1; i <= 37; i++) {
            const element = document.getElementById(`verhalten_${i}_value`) as HTMLInputElement;
            entity.push(element.value);
        }

        // @ts-ignore
        valuation.setValues(entity);
        valuation.setChildId(this.child.id);
        valuation.setChild(this.child);
        valuation.setCreatedAt(new Date().toISOString());

        this.crudService.addValuations(valuation).subscribe(
            (response: any) => {
                sessionStorage.setItem('valuation', JSON.stringify(entity));
                this.router.navigate(['/valuationResult']);
            },
            (error: any) => {
                console.error('Fehler beim Hinzufügen von Valuation:', error);
            }
        );
    }
}
