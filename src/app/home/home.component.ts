import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: IEvent[];
  selectedEvent;

  constructor(public dataService: DataService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  public selectEvent(event) {
    this.selectedEvent = event;
  }
}
