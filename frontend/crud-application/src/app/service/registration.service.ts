import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CrossOrigin} from "@angular-devkit/build-angular";

@Injectable({
  providedIn: 'root',
})


export class RegistrationService {
  REST_API: string = 'http://localhost:8080/api/v1';

  constructor(private httpClient: HttpClient) {}

  public login(username: string, password: string) {
    return this.httpClient.post<any>(`${this.REST_API}/login`, { username: username, password: password });
  }
}




