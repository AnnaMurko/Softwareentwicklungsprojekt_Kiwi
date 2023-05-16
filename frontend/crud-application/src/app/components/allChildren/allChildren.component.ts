
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Child} from "../../service/Child";
import {AttendantService} from "../../service/attendant.service";
import {Router} from "@angular/router";
import {CrudService} from "../../service/crud.service";
import {Valuation} from "../../service/Valuation";
import {ChildService} from "../../service/child.service";

@Component({
    selector: 'app-allChildren',
    templateUrl: './allChildren.component.html',
    styleUrls: ['./allChildren.component.scss']
})
export class AllChildrenComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';

    children: Child[] = [];

    constructor(private crudService:CrudService, private attendantService:AttendantService, private childService:ChildService, private http: HttpClient, private cd: ChangeDetectorRef, private router: Router) { }

    ngOnInit() {
        this.loadChildren();
    }

    loadChildren() {
        this.http.get<Child[]>(`${this.REST_API}/children`).subscribe(children => {
            this.children = this.getAllChildren(children);
            this.cd.detectChanges();
        });
    }

    getAllChildren(children: Child[]): Child[] {
        const filteredChildren: Child[] = [];
        const loggedInUserString = sessionStorage.getItem('loggedInUser');
        // @ts-ignore
        const loggedInUser = JSON.parse(loggedInUserString) as User;
        for (let i = 0; i < children.length; i++) {
            let child: Child = children[i];

            filteredChildren.push(child);

        }
        return filteredChildren;
    }
    editChild(index: number) {
        const selectedChild = this.children[index];
        this.childService.setEditChild(selectedChild);
        sessionStorage.setItem('editChild', JSON.stringify(selectedChild));
        this.router.navigate(['/updateChild']);
    }

    addChild()
    {
        this.router.navigate(['/addChild']);
    }

    deleteChild(id: any, i: any) {
        console.log(id);
        if (window.confirm('Möchtest du dieses Kind wirklich entfernen?')) {
            this.crudService.deleteChild(id).subscribe(() => {
                // Löschlogik für Bewertungen des gelöschten Kindes
                this.crudService.getValuationsByChildId(id).subscribe((valuations: Valuation[]) => {
                    valuations.forEach((valuation) => {
                        this.crudService.deleteBewertung(valuation.id).subscribe(() => {
                            console.log('Bewertung gelöscht: ' + valuation.id);
                        });
                    });
                });
                this.children.splice(i, 1);
            });
        }
    }

    showBewertungen(i:any)
    {
        const childValuations = this.children[i];
        sessionStorage.setItem('childToShowValuations', JSON.stringify(childValuations));
        this.router.navigate(['/valuationList']);
    }
}











