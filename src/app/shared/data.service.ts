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
    session: {
      date: new Date('03/11/2019'),
      time: '10:00 AM'
    },
    city: 'Melbourne'
  },
  {
    id: 2,
    name: 'Bingo Night',
    session: {
      date: new Date('5/10/2019'),
      time: '11:00 AM'
    },
    city: 'Sydney'
  },
  {
    id: 3,
    name: 'Cooking Class',
    session: {
      date: new Date('8/25/2019'),
      time: '8:00 AM'
    },
    city: 'Brisbane'
  },
  {
    id: 4,
    name: 'Indoor Climbing',
    session: {
      date: new Date('04/12/2019'),
      time: '9:00 AM'
    },
    city: 'Perth'
  }
];
