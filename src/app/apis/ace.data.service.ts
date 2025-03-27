// apis/ace.data.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AceDataService {
  private apiUrl = 'https://api.artcurrentexchange.com'; // Update with actual API endpoint later

  constructor(private http: HttpClient) {}

  // Get all events
  getEvents(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/events`);
  }

  // Get specific event by ID
  getEventById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/events/${id}`);
  }

  // Get user data
  getUserData(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users/${userId}`);
  }

  // Get top attendees for an event
  getTopAttendees(eventId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/events/${eventId}/attendees/top`);
  }
}
