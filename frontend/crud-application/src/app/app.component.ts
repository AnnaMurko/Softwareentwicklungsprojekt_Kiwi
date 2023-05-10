import {Component, OnInit} from '@angular/core';
import {UserService} from "./service/user.service";
import {User} from "./service/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KIWI ';
  constructor(public userService: UserService) {}

  ngOnInit(): void {

    const loggedInUserString = sessionStorage.getItem('loggedInUser');
    // @ts-ignore
    const loggedInUser = JSON.parse(loggedInUserString) as User;
    this.userService.setLoggedInUser(loggedInUser);
  }
}
