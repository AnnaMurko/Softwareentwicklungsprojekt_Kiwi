import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';
import { Child } from '../../service/Child';
import { Valuation } from '../../service/Valuation';
import { Router } from "@angular/router";

@Component({
    selector: 'app-valuationList',
    templateUrl: './valuationList.component.html',
    styleUrls: ['./valuationList.component.scss']
})
export class ValuationListComponent implements OnInit {
    child!: Child;
    valuations!: Valuation[];

    constructor(private crudService: CrudService, private router: Router) {}

    ngOnInit(): void {
        const childToShowValuationsString = sessionStorage.getItem('childToShowValuations');
        this.child = JSON.parse(childToShowValuationsString as string) as Child;
        this.getValuationsByChildId(this.child.id);
    }

    getValuationsByChildId(childId: number): void {
        this.crudService.getValuationsByChildId(childId).subscribe(
            (response: Valuation[]) => {
                this.valuations = response;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    ansehen(bewertung: Valuation): void {
        sessionStorage.setItem('array', JSON.stringify(bewertung.values));
        this.router.navigate(['/valuationResult']);
    }
}
