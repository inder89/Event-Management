import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  events = [
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

  constructor() {}

  public getEvents(): Array<{ id; name; session; city; temperature }> {
    return this.events;
  }
  public createEvent(event: { id; name; session; city; temperature }) {
    this.events.push(event);
  }
}
