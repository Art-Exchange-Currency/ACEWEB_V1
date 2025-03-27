import { Component } from '@angular/core';
import { MockAceDataService } from '../../apis/mock.ace.data.service';
import { IAceUser } from '../../interfaces/IAceUser';
import { IWonAuction } from '../../interfaces/IWonAuction';
import { IArtwork } from '../../interfaces/IArtwork';
import { INotification } from '../../interfaces/INotification';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, NgIf],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user!: IAceUser;
  ownedArtworks: IArtwork[] | undefined = [];
  wonAuctions: IWonAuction[] | undefined = [];
  notifications: INotification[] | undefined = [];

  constructor(private mockAceDataService: MockAceDataService) {}

  ngOnInit(): void {
    this.mockAceDataService.getUserData().subscribe((user: IAceUser) => {
      this.user = user;
      this.ownedArtworks = user.ownedArtworks;
      this.wonAuctions = user.wonAuctions;
      this.notifications = user.notifications;
    });
  }

  viewArtworkDetails(artworkId: string): void {
    console.log(`Viewing artwork details for ${artworkId}`);
  }

  claimArtwork(auctionId: string): void {
    const auction = this.wonAuctions?.find(a => a.id === auctionId);
    if (auction && !auction.claimed) {
      auction.claimed = true;
      auction.claimedDate = new Date().getTime();
      console.log(`Artwork with ID ${auctionId} claimed successfully.`);
    } else {
      console.log(`Artwork with ID ${auctionId} is already claimed or not found.`);
    }
  }
}
