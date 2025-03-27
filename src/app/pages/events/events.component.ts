import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IAceEvent } from '../../interfaces/IAceEvent';
import { MockAceDataService } from '../../apis/mock.ace.data.service';

@Component({
  selector: 'app-events',
  imports: [NgFor, NgIf],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit{
  events: IAceEvent[] = [];
  pastEvents: IAceEvent[] = [];
  highlights: { image: string; title: string }[] = [];

  constructor(private mockAceDataService: MockAceDataService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.mockAceDataService.getEvents().subscribe((data: IAceEvent[]) => {
      this.events = data.filter(event => event.rsvpStatus === 'Open' || event.rsvpStatus === 'TBD');
      this.pastEvents = data.filter(event => event.rsvpStatus === 'Closed');
      this.highlights = this.getEventHighlights();
    });
  }

  getEventHighlights(): { image: string; title: string }[] {
    return [
      { image: '/assets/events/art-event-black-tie.jpg', title: 'Exclusive Art Showcase' },
      { image: '/assets/events/art-event-group.jpg', title: 'Auction Night Celebration' },
      { image: '/assets/events/art-event-group-1.jpg', title: 'Collectors Gala Event' }
    ];
  }

  onRegister(event: IAceEvent): void {
    if (event.rsvpStatus === 'Open' && event.registrationCount < event.maxCapacity) {
      event.registrationCount++;
      console.log(`Successfully registered for ${event.name}`);
    } else {
      console.log(`Registration closed or event full for ${event.name}`);
    }
  }
}
