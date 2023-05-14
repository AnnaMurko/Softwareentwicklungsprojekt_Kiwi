import {Component, OnInit} from '@angular/core';
import {AttendantService} from "./service/attendant.service";
import {Attendant} from "./service/Attendant";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KIWI ';
  constructor(public attendantService: AttendantService) {}

  ngOnInit(): void {

    const loggedInAttendantString = sessionStorage.getItem('loggedInAttendant');
    // @ts-ignore
    const loggedInAttendant = JSON.parse(loggedInAttendantString) as Attendant;
    this.attendantService.setLoggedInAttendant(loggedInAttendant);
  }
}
