import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CrossOrigin} from "@angular-devkit/build-angular";
import {User} from "./User";

@Injectable({
  providedIn: 'root',
})


export class RegistrationService {
  REST_API: string = 'http://localhost:8080/api/v1';

  constructor(private httpClient: HttpClient) {}

  public login(username: string, password: string) {
    return this.httpClient.post<any>(`${this.REST_API}/login`, { username: username, password: password });
  }

    public getUserID(username: string): Observable<number> {
        const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get<number>(`${this.REST_API}/users/${username}/id`, { headers: headers });
    }
    public getUserAdminBoolean(username: string): Observable<boolean> {
        const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get<boolean>(`${this.REST_API}/users/${username}/admin`, { headers: headers });
    }


    public getUsers(): Observable<User[]>{
        const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get<User[]>(`${this.REST_API}/users`, { headers: headers });
    }
}




