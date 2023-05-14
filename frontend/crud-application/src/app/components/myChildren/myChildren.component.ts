
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Child} from "../../service/Child";
import {AttendantService} from "../../service/attendant.service";
import {Attendant} from "../../service/Attendant";
import {Router} from "@angular/router";
import {ChildService} from "../../service/child.service";

@Component({
    selector: 'app-myChildren',
    templateUrl: './myChildren.component.html',
    styleUrls: ['./myChildren.component.scss']
})
export class MyChildrenComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';

    children: Child[] = [];

    constructor(private userService:AttendantService, private childService:ChildService, private http: HttpClient, private cd: ChangeDetectorRef, private router: Router) { }

    ngOnInit() {
        this.loadChildren();
        const annaString = sessionStorage.getItem('loggedInAttendant');
        // @ts-ignore
        console.log(annaString);
    }

    loadChildren() {
        this.http.get<Child[]>(`${this.REST_API}/children`).subscribe(children => {
            console.log(children);
            this.children = this.filterChildrenByAttendant(children);
            console.log(this.children);
            this.cd.detectChanges(); // manuelle Aktualisierung des Templates
        });
    }

    filterChildrenByAttendant(children: Child[]): Child[] {
        const filteredChildren: Child[] = [];
        const loggedInUserString = sessionStorage.getItem('loggedInAttendant');
        // @ts-ignore
        const loggedInUser = JSON.parse(loggedInUserString) as User;
        for (let i = 0; i < children.length; i++) {
            let child: Child = children[i];
            if (child.attendantId === loggedInUser._id) {
                filteredChildren.push(child);
            }
        }
        return filteredChildren;
    }

    editChild(index: number) {
        const selectedChild = this.children[index];
        this.childService.setEditChild(selectedChild);
        sessionStorage.setItem('ChildToBeRated', JSON.stringify(selectedChild));
        this.router.navigate(['/valuation']);
    }


    showBewertungen(index: number) {
        const childToShowBewertungen = this.children[index];
        sessionStorage.setItem('childToShowBewertungen', JSON.stringify(childToShowBewertungen));
        this.router.navigate(['/valuationList']);

    }
}










