import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styles: [
    `
      .container {
        padding: 80px;
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
