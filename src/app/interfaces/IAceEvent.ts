export interface IAceEvent {
  id: string,
  name: string,
  shortDescription: string,
  longDescription: string,
  date: string | null, // null for TBD
  time: string | null,
  image: string | null,
  location: string,
  registrationCount: number,
  maxCapacity: number,
  rsvpStatus: 'Open' | 'Closed' | 'TBD',
  registrationWindow: string,
  status: string,
  topAttendees: { name: string; picture: string; }[]
}