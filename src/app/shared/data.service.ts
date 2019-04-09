import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IEvent } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  public getEvents(): Observable<IEvent[]> {
    const subject = new Subject<IEvent[]>();
    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 100);
    return subject;
  }

  public getEvent(id: number): IEvent {
    return EVENTS.find(event => event.id === id);
  }

  public createEvent(event: { id: number; name; session; city }) {
    EVENTS.push(event);
  }
}

const EVENTS: IEvent[] = [
  {
    id: 1,
    name: 'Bowling',
    session: '03/11/2019 10:00 AM',
    city: 'Melbourne'
  },
  {
    id: 2,
    name: 'Bingo Night',
    session: '5/10/2019 1:00 AM',
    city: 'Sydney'
  },
  {
    id: 3,
    name: 'Cooking Class',
    session: '8/25/2019 2:00 AM',
    city: 'Brisbane'
  },
  {
    id: 4,
    name: 'Indoor Climbing',
    session: '04/12/2019 9:00 AM',
    city: 'Perth'
  }
];
