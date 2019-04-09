import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from '../shared/index';
@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding: 50px;
      }
      .card-title > * {
        margin: 10px 0;
      }
      .card-title .btn-danger {
        margin-left: 25px;
      }
    `
  ]
})
export class EventDetailsComponent {
  event: IEvent;
  submitted = false;

  constructor(
    public dataService: DataService,
    public route: ActivatedRoute,
    public router: Router
  ) {}
  ngOnInit() {
    this.event = this.dataService.getEvent(+this.route.snapshot.params['id']);
  }

  cancel() {
    this.router.navigate(['/home']);
  }

  save() {
    this.router.navigate(['/home']);
  }

  /* onSubmit() {
    this.submitted = true;
    this.router.navigate(['/home']);
    console.log('saving project', event);
  } */
}
