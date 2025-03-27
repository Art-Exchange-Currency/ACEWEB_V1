import { Component } from '@angular/core';
import { MockAceDataService } from '../../apis/mock.ace.data.service';
import { IAceAuction } from '../../interfaces/IAceAuction';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-auction',
  imports: [CommonModule, FormsModule],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.css'
})
export class AuctionComponent {
  savedArtworks: Set<string> = new Set();
  auctions: IAceAuction[] = [];
  filteredAuctions: IAceAuction[] = [];
  showModal: boolean = false;
  modalData: IAceAuction | null = null;
  priceRange: number = 10000;
  selectedCategories: Set<string> = new Set();

  constructor(private mockAceDataService: MockAceDataService) {}

  ngOnInit(): void {
    this.mockAceDataService.getAuctions().subscribe((auctions: IAceAuction[]) => {
      this.auctions = auctions;
      this.filteredAuctions = [...auctions];
    });
  }

  // Filter Auctions by Category
  filterCategory(category: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.selectedCategories.add(category);
    } else {
      this.selectedCategories.delete(category);
    }
    this.applyFilters();
  }

  // Filter Auctions by Price
  filterByPrice(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredAuctions = this.auctions.filter(auction => {
      const matchesCategory = this.selectedCategories.size === 0 || this.selectedCategories.has(auction.category);
      const matchesPrice = auction.currentBid <= this.priceRange;
      return matchesCategory && matchesPrice;
    });
  }

  // Toggle Favorite
  toggleFavorite(auction: IAceAuction): void {
    if (this.savedArtworks.has(auction.id)) {
      this.savedArtworks.delete(auction.id);
    } else {
      this.savedArtworks.add(auction.id);
    }
  }

  isSaved(auction: IAceAuction): boolean {
    return this.savedArtworks.has(auction.id);
  }

  // Show Quick View Modal
  openModal(auction: IAceAuction): void {
    this.modalData = auction;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.modalData = null;
  }

  // Artist Info Peek
  showArtistInfo(artistName: string): void {
    alert(`Artist: ${artistName}\nMore information available soon.`);
  }
}
