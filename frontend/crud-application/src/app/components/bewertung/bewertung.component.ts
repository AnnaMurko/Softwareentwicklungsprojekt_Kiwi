
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Child} from "../../service/Child";
import {UserService} from "../../service/user.service";
import {User} from "../../service/User";

@Component({
    selector: 'app-childs',
    templateUrl: './bewertung.component.html',
    styleUrls: ['./bewertung.component.scss']
})
export class BewertungComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';

    child!: Child;
    constructor(private userService:UserService,private http: HttpClient, private cd: ChangeDetectorRef) { }

    ngOnInit() {
        const loggedInUserString = sessionStorage.getItem('editChild');
        // @ts-ignore
      this.child = JSON.parse(loggedInUserString) as Child;
    }

}











