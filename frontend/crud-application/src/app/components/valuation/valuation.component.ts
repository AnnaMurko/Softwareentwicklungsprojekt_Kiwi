
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Child} from "../../service/Child";
import {Router} from "@angular/router";
import {CrudService} from "../../service/crud.service";
import {AttendantService} from "../../service/attendant.service";
import {Valuation} from "../../service/Valuation";
@Component({
    selector: 'app-childs',
    templateUrl: './valuation.component.html',
    styleUrls: ['./valuation.component.scss']
})
export class ValuationComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';

    child!: Child;
    constructor(private crudService: CrudService,private userService:AttendantService,private http: HttpClient, private cd: ChangeDetectorRef, private router: Router) { }

    ngOnInit() {
        const loggedInUserString = sessionStorage.getItem('ChildToBeRated');
        console.log(loggedInUserString)
        // @ts-ignore
        this.child = JSON.parse(loggedInUserString) as Child;
    }

    fertig()
    {
        // @ts-ignore
        const entity: (string | null)[] = [];
        // @ts-ignore
        const ariaValues: Valuation = new Valuation();
        for(let i = 1; i <= 37; i++) {
            const element = document.getElementById(`verhalten_${i}_value`) as HTMLInputElement;;
            entity.push(element.textContent);
        }

        // @ts-ignore
        ariaValues.setValues(entity);
        console.log(entity);
        ariaValues.setChildId(this.child.id);
        ariaValues.setChild(this.child);
        ariaValues.setCreatedAt(new Date().toISOString()); // Aktuelles Datum und Uhrzeit hinzufügen

        console.log(ariaValues);
        this.crudService.addValuations(ariaValues).subscribe(
            (response: any) => {
                console.log('AriaValues hinzugefügt:', response);
                sessionStorage.setItem('valuation', JSON.stringify(entity));
                this.router.navigate(['/valuationResult']);
            },
            (error: any) => {
                console.error('Fehler beim Hinzufügen von AriaValues:', error);
            }
        );
    }

}










