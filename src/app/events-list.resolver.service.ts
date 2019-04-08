import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { DataService } from './shared/data.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(public dataService: DataService) {}
  resolve() {
    return this.dataService.getEvents().pipe(map(events => events));
  }
}
