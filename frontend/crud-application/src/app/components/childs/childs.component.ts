
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Child} from "../../service/Child";
import {UserService} from "../../service/user.service";
import {User} from "../../service/User";

@Component({
    selector: 'app-childs',
    templateUrl: './childs.component.html',
    styleUrls: ['./childs.component.scss']
})
export class ChildsComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';

    children?: Child[];

    constructor(private userService:UserService,private http: HttpClient, private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.loadChildren();
    }

    loadChildren() {
        this.http.get<Child[]>(`${this.REST_API}/childs`).subscribe(children => {
            this.children = this.filterChildrenByUser(children);
            this.cd.detectChanges(); // manuelle Aktualisierung des Templates
        });
    }

    filterChildrenByUser(children: Child[]): Child[] {
        const filteredChildren: Child[] = [];
        for (let i = 0; i < children.length; i++) {
            let child: Child = children[i];
            if (child.userId === this.userService.getLoggedInUser().id) {
                filteredChildren.push(child);
            }
        }
        return filteredChildren;
    }
    editChild()
    {

    }
}











