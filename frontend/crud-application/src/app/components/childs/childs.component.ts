
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Child} from "../../service/Child";

@Component({
    selector: 'app-childs',
    templateUrl: './childs.component.html',
    styleUrls: ['./childs.component.css']
})
export class ChildsComponent implements OnInit {

    children!: Child[];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get<Child[]>('/api/v1/childs').subscribe(children => {
            this.children = children;
        });
    }

}











