
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Child} from "../../service/Child";
import {UserService} from "../../service/user.service";
import {User} from "../../service/User";
import {Router} from "@angular/router";
import {ChildService} from "../../service/child.service";
import {CrudService} from "../../service/crud.service";
import {AriaValues} from "../../service/AriaValues";

@Component({
    selector: 'app-editChild',
    templateUrl: './editChild.component.html',
    styleUrls: ['./editChild.component.scss']
})
export class EditChildComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';

    children: Child[] = [];

    constructor(private crudService:CrudService,private userService:UserService,private childService:ChildService,private http: HttpClient, private cd: ChangeDetectorRef,private router: Router) { }

    ngOnInit() {
        this.loadChildren();
    }




    loadChildren() {
        this.http.get<Child[]>(`${this.REST_API}/childs`).subscribe(children => {
            this.children = this.getAllChildren(children);
            this.cd.detectChanges(); // manuelle Aktualisierung des Templates
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
        if (window.confirm('Do you want to go ahead?')) {
            this.crudService.deleteChild(id).subscribe(() => {
                // Löschlogik für Bewertungen des gelöschten Kindes
                this.crudService.getBewertungenByChildId(id).subscribe((bewertungen: AriaValues[]) => {
                    bewertungen.forEach((bewertung) => {
                        this.crudService.deleteBewertung(bewertung.id).subscribe(() => {
                            console.log('Bewertung gelöscht: ' + bewertung.id);
                        });
                    });
                });
                this.children.splice(i, 1);
            });
        }
    }

    showBewertungen(i:any)
    {
        const childToShowBewertungen = this.children[i];
        sessionStorage.setItem('childToShowBewertungen', JSON.stringify(childToShowBewertungen));
        this.router.navigate(['/bewertungenListe']);
    }
}











