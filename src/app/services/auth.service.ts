import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cacheService: CacheService) {}

  // Check if the user is logged in using CacheService
  isLoggedIn(): boolean {
    const token = this.cacheService.getToken();
    return !!token;
  }

  // Save token on login
  login(token: string): void {
    this.cacheService.setToken(token);
  }

  // Clear token on logout
  logout(): void {
    this.cacheService.removeToken();
  }
}