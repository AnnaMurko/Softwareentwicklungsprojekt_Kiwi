
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Child} from "../../service/Child";
import {UserService} from "../../service/user.service";

@Component({
    selector: 'app-childs',
    templateUrl: './childs.component.html',
    styleUrls: ['./childs.component.scss']
})
export class ChildsComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';

    children!: Child[];

    constructor(private userService:UserService,private http: HttpClient) { }

    ngOnInit() {
        this.loadChildren();
    }

    loadChildren() {
        this.http.get<Child[]>(`${this.REST_API}/childs`).subscribe(children => {
            this.children = this.filterChildrenByUser(children);
        });
    }
    filterChildrenByUser(children: Child[]) {
        return children.filter(child =>{ child.userId === this.userService.getLoggedInUser().id;
            console.log(child.userId)  ;
            console.log(child.id)  ;
            console.log(child.name)  ;
        });
    }

    editChild()
    {

    }
}











