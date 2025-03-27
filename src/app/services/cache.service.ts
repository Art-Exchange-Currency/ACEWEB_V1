import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private TOKEN_KEY = 'authToken';
  private USER_KEY = 'authUser';
  private authStateSubject = new BehaviorSubject<boolean>(this.isAuthenticated());
  authState$ = this.authStateSubject.asObservable();

  constructor() { }

  // Store token and update auth state
  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.authStateSubject.next(true);
  }

  // Retrieve token
  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }


  // Remove token and update auth state
  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.authStateSubject.next(false);
  }

  // Store user data
  setUser(user: any): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  // Retrieve user data
  getUser(): any {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  // Remove user data
  removeUser(): void {
    localStorage.removeItem(this.USER_KEY);
  }

  // Clear all stored data and update auth state
  clearCache(): void {
    this.removeToken();
    this.removeUser();
  }

  // Check if authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}