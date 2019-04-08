export interface IEvent {
  id: number;
  name: string;
  session: {
    date: Date;
    time: string;
  };
  city: string;
}
