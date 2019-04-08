import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {
  event: { id; name; session; city } = {
    id: null,
    name: '',
    session: '',
    city: ''
  };

  constructor(public dataService: DataService) {}

  ngOnInit() {}

  createEvent(formValues) {
    // console.log(this.event);
    // console.log(formValues);

    this.dataService.createEvent(formValues);

    this.event = { id: null, name: '', session: '', city: '' };
  }
}
