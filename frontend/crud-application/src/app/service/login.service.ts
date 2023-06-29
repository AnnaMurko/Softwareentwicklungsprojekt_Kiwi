import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CrossOrigin} from "@angular-devkit/build-angular";
import {Attendant} from "./Attendant";

@Injectable({
    providedIn: 'root',
})


export class LoginService {
    REST_API: string = 'http://localhost:8080/api/v1';

    constructor(private httpClient: HttpClient) {}

    public login(uername: string, password: string) {
        return this.httpClient.post<any>(`${this.REST_API}/login`, { uername: uername, password: password });
    }

    public getAttendantID(uername: string): Observable<number> {
        const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get<number>(`${this.REST_API}/attendants/${uername}/id`, { headers: headers });
    }
    public getAttendantAdminBoolean(uername: string): Observable<boolean> {
        const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get<boolean>(`${this.REST_API}/attendants/${uername}/admin`, { headers: headers });
    }
    public getAttendants(): Observable<Attendant[]>{
        const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get<Attendant[]>(`${this.REST_API}/attendants`, { headers: headers });
    }
}



