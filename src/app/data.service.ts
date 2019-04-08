import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  public getEvents(): Array<{ id; name; session; city; temperature }> {
    return EVENTS;
  }

  public getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
  }

  public createEvent(event: { id; name; session; city; temperature }) {
    EVENTS.push(event);
  }
}

const EVENTS = [
  {
    id: 1,
    name: 'Bowling',
    session: '02-12-2019',
    city: 'Melbourne',
    temperature: 25.1
  },
  {
    id: 2,
    name: 'Bingo Night',
    session: '04-12-2019',
    city: 'Sydney',
    temperature: 25.1
  },
  {
    id: 3,
    name: 'Cooking Class',
    session: '12-12-2019 ',
    city: 'Brisbane',
    temperature: 25.1
  },
  {
    id: 4,
    name: 'Indoor Climbing',
    session: '02-11-2019',
    city: 'Perth',
    temperature: 25.1
  }
];
