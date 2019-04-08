import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events;
  selectedEvent;

  constructor(public dataService: DataService) {}

  ngOnInit() {
    this.events = this.dataService.getEvents();
  }

  public selectEvent(event) {
    this.selectedEvent = event;
  }
}
