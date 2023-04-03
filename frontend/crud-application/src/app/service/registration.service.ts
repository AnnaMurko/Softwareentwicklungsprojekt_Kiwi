import {Injectable} from "@angular/core";
import {RegistrationUser} from "./registrationUser";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CrossOrigin} from "@angular-devkit/build-angular";

@Injectable({
  providedIn: 'root',
})


export class RegistrationService {
  REST_API: string = 'https://localhost:8080/api/v1';

  constructor(private httpClient: HttpClient) {

  }

  public loginUserFromRemote(user:RegistrationUser):Observable<any>
  {
    let API_URL = `${this.REST_API}/users`;

    return  this.httpClient.post<any>(API_URL, user);
  }


  loginUser(UserCred:RegistrationUser){ //: Observable<any>
    console.log("api call");
    let API_URL = `${this.REST_API}/authenticate`;
    console.log(UserCred.toString());
    return this.httpClient.post(API_URL,UserCred);
  }


}
