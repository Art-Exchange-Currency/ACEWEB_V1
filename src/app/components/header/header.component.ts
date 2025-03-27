import { NgIf } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CacheService } from '../../services/cache.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [NgIf, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy {
  isMenuOpen = false;
  isAuthenticated = false;
  private authSubscription!: Subscription;

  constructor(private router: Router, private cacheService: CacheService) {}

  ngOnInit() {
    this.authSubscription = this.cacheService.authState$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.cacheService.clearCache();
    this.router.navigate(['/login']);
  }
}