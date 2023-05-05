
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Child} from "../../service/Child";
import {UserService} from "../../service/user.service";
import {User} from "../../service/User";
import {Router} from "@angular/router";

@Component({
    selector: 'app-childs',
    templateUrl: './bewertung.component.html',
    styleUrls: ['./bewertung.component.scss']
})
export class BewertungComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';

    child!: Child;
    constructor(private userService:UserService,private http: HttpClient, private cd: ChangeDetectorRef, private router: Router) { }

    ngOnInit() {
        const loggedInUserString = sessionStorage.getItem('ChildToBeRated');
        console.log(loggedInUserString)
        // @ts-ignore
        this.child = JSON.parse(loggedInUserString) as Child;
    }

fertig()
{
    // @ts-ignore
    const ariaValues = [];

    for(let i = 1; i <= 37; i++) {
        const element = document.getElementById(`verhalten_${i}_value`) as HTMLInputElement;;
        ariaValues.push(element.textContent);
    }
console.log(ariaValues);
sessionStorage.setItem('array', JSON.stringify(ariaValues));

    this.router.navigate(['/ergebnis']);

}

}











