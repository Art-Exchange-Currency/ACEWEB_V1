import { Injectable } from '@angular/core';
import { IAceEvent } from '../interfaces/IAceEvent';
import { Observable, of } from 'rxjs';
import { IAceAuction } from '../interfaces/IAceAuction';
import { IAceUser } from '../interfaces/IAceUser';

@Injectable({ providedIn: 'root' })
export class MockAceDataService {

    private mockEvents: IAceEvent[] = [
        {
          id: '1',
          name: 'Art Renaissance Auction',
          shortDescription: 'An exclusive auction featuring Renaissance-inspired masterpieces.',
          longDescription: 'Join us for a luxurious evening of fine art bidding. Expect Renaissance-inspired artworks by emerging and established artists.',
          date: '2025-03-25',
          time: '18:00',
          image: '/assets/events/art-event-black-tie.jpg', // Updated to black-tie
          location: 'New York City, NY',
          registrationCount: 120,
          maxCapacity: 150,
          rsvpStatus: 'Open',
          registrationWindow: '2025-03-01 to 2025-03-20',
          status: 'Upcoming',
          topAttendees: [
            { name: 'Olivia Martinez', picture: 'olivia.jpg' },
            { name: 'Daniel Smith', picture: 'daniel.png' },
            { name: 'Sophia Johnson', picture: 'sophia.jpeg' },
          ],
        },
        {
          id: '2',
          name: 'Digital NFT Art Fair',
          shortDescription: 'Explore the cutting edge of digital art and NFTs.',
          longDescription: 'This virtual fair brings together digital artists and blockchain enthusiasts. Discover and bid on exclusive NFT artworks.',
          date: '2025-04-10',
          time: null,
          image: '/assets/events/art-event-live.jpg', // Changed to live event
          location: 'Online',
          registrationCount: 350,
          maxCapacity: 500,
          rsvpStatus: 'Open',
          registrationWindow: '2025-03-15 to 2025-04-05',
          status: 'Upcoming',
          topAttendees: [
            { name: 'Ethan Wilson', picture: 'ethan.gif' },
            { name: 'Mia Taylor', picture: 'mia.svg' },
            { name: 'Jack Lee', picture: 'jack.webp' },
          ],
        },
        {
          id: '3',
          name: 'Artistry Gala - Date TBD',
          shortDescription: 'A luxurious night celebrating art, with details coming soon.',
          longDescription: 'Enjoy an evening of elegance, entertainment, and fine art. The date and venue will be announced shortly.',
          date: null,
          time: null,
          image: '/assets/events/art-event-group.jpg', // Changed to group
          location: 'TBD',
          registrationCount: 50,
          maxCapacity: 300,
          rsvpStatus: 'TBD',
          registrationWindow: 'TBD',
          status: 'TBD',
          topAttendees: [
            { name: 'Ava Wilson', picture: 'ava.jpg' },
            { name: 'Noah Davis', picture: 'noah.png' },
          ],
        },
        {
          id: '4',
          name: 'Sculptors in the Garden',
          shortDescription: 'An outdoor exhibition showcasing remarkable sculptures.',
          longDescription: 'Experience the beauty of sculptures displayed in a curated garden setting. Artists will be present for discussions.',
          date: '2025-05-15',
          time: '14:00',
          image: '/assets/events/art-event-outdoor.jpg', // Changed to outdoor
          location: 'Los Angeles, CA',
          registrationCount: 75,
          maxCapacity: 100,
          rsvpStatus: 'Open',
          registrationWindow: '2025-04-01 to 2025-05-10',
          status: 'Upcoming',
          topAttendees: [
            { name: 'Ella Johnson', picture: 'ella.jpeg' },
            { name: 'William Thomas', picture: 'william.svg' },
            { name: 'Liam Scott', picture: 'liam.webp' },
          ],
        },
        {
          id: '5',
          name: 'Abstract Visions: Past Event',
          shortDescription: 'A retrospective on the evolution of abstract art.',
          longDescription: 'This past exhibition celebrated abstract artists, exploring the movement’s growth over the decades.',
          date: '2025-03-05',
          time: '17:00',
          image: '/assets/events/art-event-group-1.jpg', // Changed to group 1
          location: 'Chicago, IL',
          registrationCount: 200,
          maxCapacity: 200,
          rsvpStatus: 'Closed',
          registrationWindow: '2025-02-01 to 2025-02-28',
          status: 'Past',
          topAttendees: [
            { name: 'Isabella White', picture: 'isabella.png' },
            { name: 'Lucas Brown', picture: 'lucas.jpg' },
          ],
        },
        {
          id: '6',
          name: 'Senior Artists Showcase',
          shortDescription: 'Celebrating the lifetime works of senior artists.',
          longDescription: 'A special exhibition highlighting the incredible talent and experience of senior artists in our community.',
          date: '2025-06-20',
          time: '15:00',
          image: '/assets/events/art-event-senior.jpg', // Added senior event
          location: 'Miami, FL',
          registrationCount: 60,
          maxCapacity: 80,
          rsvpStatus: 'Open',
          registrationWindow: '2025-05-15 to 2025-06-15',
          status: 'Upcoming',
          topAttendees: [
            { name: 'Agnes Moore', picture: 'agnes.jpg' },
            { name: 'Bernard Hill', picture: 'bernard.png' },
            { name: 'Clara Young', picture: 'clara.jpeg' },
          ],
        },
        {
          id: '7',
          name: 'Live Street Art Festival',
          shortDescription: 'Witness the creation of vibrant street art in real-time.',
          longDescription: 'An energetic festival where street artists create murals and installations live. Immerse yourself in the urban art scene.',
          date: '2025-07-10',
          time: '12:00',
          image: '/assets/events/art-event-live.jpg', // Added live event
          location: 'Austin, TX',
          registrationCount: 150,
          maxCapacity: 250,
          rsvpStatus: 'Open',
          registrationWindow: '2025-06-01 to 2025-07-05',
          status: 'Upcoming',
          topAttendees: [
            { name: 'Kai Rivera', picture: 'kai.jpg' },
            { name: 'Lena Patel', picture: 'lena.png' },
            { name: 'Marco Diaz', picture: 'marco.jpeg' },
          ],
        },
        {
          id: '8',
          name: 'Black Tie Charity Art Ball',
          shortDescription: 'An elegant evening of art and philanthropy.',
          longDescription: 'Join us for a sophisticated black-tie event featuring fine art, gourmet dining, and a charity auction to support local arts programs.',
          date: '2025-08-22',
          time: '19:00',
          image: '/assets/events/art-event-black-tie.jpg', //Added Black tie event
          location: 'San Francisco, CA',
          registrationCount: 220,
          maxCapacity: 250,
          rsvpStatus: 'Open',
          registrationWindow: '2025-07-15 to 2025-08-15',
          status: 'Upcoming',
          topAttendees: [
            { name: 'Zara Khan', picture: 'zara.jpg' },
            { name: 'Victor Chen', picture: 'victor.png' },
            { name: 'Nina Russo', picture: 'nina.jpeg' },
          ],
        },
      ];

    private mockAuctions: IAceAuction[] = [
        {
          id: '1',
          title: 'Abstract Colors',
          artist: 'Jane Doe',
          estimatedValue: 3000,
          currentBid: 3200,
          category: 'Painting',
          imageUrl: 'assets/arts/donald_duck.jpg',
          endTime: '2025-03-22T14:30:00Z',
          progress: 80,
          timeRemaining: '1d 2h 30m'
        },
        {
          id: '2',
          title: 'Ocean Breeze',
          artist: 'John Smith',
          estimatedValue: 5000,
          currentBid: 5200,
          category: 'Painting',
          imageUrl: 'assets/arts/v_bird.jpg',
          endTime: '2025-03-23T16:00:00Z',
          progress: 60,
          timeRemaining: '2d 1h 45m'
        },
        {
          id: '3',
          title: 'City Lights',
          artist: 'Emma Johnson',
          estimatedValue: 7000,
          currentBid: 7200,
          category: 'Painting',
          imageUrl: 'assets/arts/v_long_nose.jpg',
          endTime: '2025-03-24T18:00:00Z',
          progress: 90,
          timeRemaining: '3d 4h 15m'
        }
      ];

      private mockUserData: IAceUser = {
        id: 'user123',
        name: 'John Doe',
        email: 'johndoe@example.com',
        walletAddress: '0x1234567890abcdef1234567890abcdef12345678',
        ownedArtworks: [
          { id: 'art1', title: 'Sunset Bliss', imageUrl: 'assets/arts/ai_gen_sunset_bliss.jpg', artist: 'Alice Smith' },
          { id: 'art2', title: 'Abstract Mirage', imageUrl: 'assets/arts/ai_gen_mirage.jpg', artist: 'Bob Johnson' }
        ],
        wonAuctions: [
          { id: 'win1', title: 'Eternal Echo', imageUrl: 'assets/arts/ai_gen_geni.jpg', artist: 'Charlie Davis', winningBid: 4500, claimed: false, claimedDate:  null}        ],
        notifications: [
          { id: 'notif1', message: 'Congratulations! You won the auction for Eternal Echo.', read: false },
          { id: 'notif2', message: 'Your bid on Abstract Mirage was placed successfully.', read: true }
        ]
      };
    
      getUserData(): Observable<IAceUser> {
        return of(this.mockUserData);
      }
    
      getAuctions(): Observable<IAceAuction[]> {
        return of(this.mockAuctions);
      }
    
      getEvents(): Observable<IAceEvent[]> {
        return of(this.mockEvents);
      }
    
      getEventById(id: string): Observable<IAceEvent> {
        const event = this.mockEvents.find(event => event.id === id);
        if (event) {
            return of(event);
        } else {
            throw new Error(`Event with id ${id} not found`);
        }
      }
}
