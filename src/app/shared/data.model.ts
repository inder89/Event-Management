export interface IEvent {
  id: number;
  name: string;
  session: {
    date: string;
    time: string;
  };
  city: string;
}
