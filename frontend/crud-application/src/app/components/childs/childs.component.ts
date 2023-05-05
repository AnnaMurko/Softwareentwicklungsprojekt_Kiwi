
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Child} from "../../service/Child";
import {UserService} from "../../service/user.service";
import {User} from "../../service/User";
import {Router} from "@angular/router";
import {ChildService} from "../../service/child.service";

@Component({
    selector: 'app-childs',
    templateUrl: './childs.component.html',
    styleUrls: ['./childs.component.scss']
})
export class ChildsComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';

    children: Child[] = [];

    constructor(private userService:UserService,private childService:ChildService,private http: HttpClient, private cd: ChangeDetectorRef,private router: Router) { }

    ngOnInit() {
        this.loadChildren();
    }

    loadChildren() {
        this.http.get<Child[]>(`${this.REST_API}/childs`).subscribe(children => {
            console.log(children);
            this.children = this.filterChildrenByUser(children);
            console.log(this.children);
            this.cd.detectChanges(); // manuelle Aktualisierung des Templates
        });
    }

    filterChildrenByUser(children: Child[]): Child[] {
        const filteredChildren: Child[] = [];
        const loggedInUserString = sessionStorage.getItem('loggedInUser');
        // @ts-ignore
        const loggedInUser = JSON.parse(loggedInUserString) as User;
        for (let i = 0; i < children.length; i++) {
            let child: Child = children[i];
            if (child.userId === loggedInUser._id) {
                filteredChildren.push(child);
            }
        }
        return filteredChildren;
    }

    editChild(index: number) {
        const selectedChild = this.children[index];
        this.childService.setEditChild(selectedChild);
        sessionStorage.setItem('ChildToBeRated', JSON.stringify(selectedChild));
        this.router.navigate(['/bewertung']);
    }
}










