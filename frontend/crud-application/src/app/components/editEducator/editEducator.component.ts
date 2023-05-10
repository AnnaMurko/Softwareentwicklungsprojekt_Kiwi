import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../../service/User";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {CrudService} from "../../service/crud.service";
import {Child} from "../../service/Child";

@Component({
    selector: 'app-editEducator',
    templateUrl: './editEducator.component.html',
    styleUrls: ['./editEducator.component.scss']
})
export class EditEducatorComponent implements OnInit {
    REST_API: string = 'http://localhost:8080/api/v1';
    users: User[] = [];
    errorMessage: string = '';

    constructor(private crudService:CrudService,private userService:UserService,private http: HttpClient, private cd: ChangeDetectorRef,private router: Router) { }

    ngOnInit() {
        this.loadUsers();
    }

    addEducator()
    {
        this.router.navigate(['/addEducator']);
    }

    isAdmin(user: User): boolean {
        return user.admin;
    }

    loadUsers() {
        this.http.get<User[]>(`${this.REST_API}/users`).subscribe(users => {
            this.users = this.getAllUsers(users);
            this.cd.detectChanges(); // manuelle Aktualisierung des Templates
        });
    }

    getAllUsers(users: User[]): User[] {
        const filteredUsers: User[] = [];
        for (let i = 0; i < users.length; i++) {
            let user: User = users[i];
            filteredUsers.push(user);
        }
        return filteredUsers;
    }

    editEducator(index: number) {
        const selectedEducator = this.users[index];
        sessionStorage.setItem('editEducator', JSON.stringify(selectedEducator));
        this.router.navigate(['/updateEducator']);
    }

    deleteEducator(id: any, i: any) {
        this.crudService.getChilds().subscribe(children => {
            for (let j = 0; j < children.length; j++) {
                let child = children[j];
                if (child.userId === id) {
                    // Fehlermeldung ausgeben und aus der Funktion zurückkehren
                    this.errorMessage = 'Betreuer kann nicht gelöscht werden, da sie verbundene Kinder haben.';
                    return;
                }
            }

            if (window.confirm('Do you want to go ahead?')) {
                this.crudService.deleteUser(id).subscribe(() => {
                    this.users.splice(i, 1);
                });
            }
        });
    }
}
