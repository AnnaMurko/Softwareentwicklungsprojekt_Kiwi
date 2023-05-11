import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Child } from '../../service/Child';
import { AriaValues } from '../../service/AriaValues';
import {Router} from "@angular/router";

@Component({
    selector: 'app-bewertungen-liste',
    templateUrl: './bewertungenListe.component.html',
    styleUrls: ['./bewertungenListe.component.scss']
})
export class BewertungenListeComponent implements OnInit {
    child!: Child;
    bewertungen!: AriaValues[];

    constructor(private crudService: CrudService, private router: Router) {}

    ngOnInit(): void {
        const childTo = sessionStorage.getItem('childToShowBewertungen');

        // @ts-ignore
        this.child = JSON.parse(childTo) as Child;
        console.log(this.child.name);
        console.log(this.child);
this.getBewertungenByChildId(this.child.id);
    }

    getBewertungenByChildId(childId: number): void {
        console.log(childId);
        this.crudService.getBewertungenByChildId(childId).subscribe(
            (response: AriaValues[]) => {
                this.bewertungen = response;
                console.log(this.bewertungen);
            },
            (error: any) => {
                console.log(error);
            }
        );
    }


    ansehen(bewertung: AriaValues): void {
        sessionStorage.setItem('array', JSON.stringify(bewertung.values));
        this.router.navigate(['/ergebnis']);
    }
}
