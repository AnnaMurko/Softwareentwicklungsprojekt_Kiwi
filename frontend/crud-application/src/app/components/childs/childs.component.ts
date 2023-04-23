
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Child} from "../../service/Child";

@Component({
    selector: 'app-childs',
    templateUrl: './childs.component.html',
    styleUrls: ['./childs.component.scss']
})
export class ChildsComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';

    children!: Child[];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.http.get<Child[]>(`${this.REST_API}/childs`).subscribe(children => {
            this.children = children;
        });
    }

    editChild()
    {

    }

}











