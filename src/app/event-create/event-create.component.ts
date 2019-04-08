import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  event: { id; name; session; city; temperature } = {
    id: null,
    name: '',
    session: '',
    city: '',
    temperature: ''
  };

  constructor(public dataService: DataService) {}

  ngOnInit() {}

  createEvent() {
    console.log(this.event);
    this.dataService.createEvent(this.event);
    this.event = { id: null, name: '', session: '', city: '', temperature: '' };
  }
}
