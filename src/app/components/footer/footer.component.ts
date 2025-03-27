import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CacheService } from '../../services/cache.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnDestroy {
  currentYear = new Date().getFullYear();
  contact = {
    email: 'support@artcurrencyexchange.com',
    phone: '+1 (800) 555-5555'
  }
  isAuthenticated = false;
  private authSubscription!: Subscription;

  constructor(private cacheService: CacheService) {}

  ngOnInit() {
    this.authSubscription = this.cacheService.authState$.subscribe(authState => {
      this.isAuthenticated = authState;
    });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}