import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding: 80px;
      }
      .card-title > * {
        margin: 20px 0;
      }
      .card-title .btn-danger {
        margin-left: 25px;
      }
    `
  ]
})
export class EventDetailsComponent {
  event: any;
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
}
