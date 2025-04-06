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
    return "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE5ZGRjYTc2YzEyMzMyNmI5ZTJlODJkOGFjNDg0MWU1MzMyMmI3NmEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQS4gQXBoaXNlIFRyYW9yZSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKVTJzWUd2QTRCRjVNLVFPQmN2d1N5Q1kwbjJQeWROdWxaS0tMSVQ3U0tKaFRYdWc9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXJ0LWN1cnJlbmN5LWV4Y2hhbmdlLS0tYWNlIiwiYXVkIjoiYXJ0LWN1cnJlbmN5LWV4Y2hhbmdlLS0tYWNlIiwiYXV0aF90aW1lIjoxNzQzMTA4Mzg2LCJ1c2VyX2lkIjoicmVkSzBYTUExWFIzdUlOdFNNUDFRbzhWS3JKMiIsInN1YiI6InJlZEswWE1BMVhSM3VJTnRTTVAxUW84VktySjIiLCJpYXQiOjE3NDMxMDgzODYsImV4cCI6MTc0MzExMTk4NiwiZW1haWwiOiJ0YWFwaGlzZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjEwNzQ2MDU1MjA1MTM5MDMxNDA3MCJdLCJlbWFpbCI6WyJ0YWFwaGlzZUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.aLUSfaaRyYwFNaAO9mO-wHoBlOUMS6Taym2tYb-iolKKW9FfUkkJt77_Ed0EbNZwNjeSuBaIU7YzxSLlHB2WScxkL4KqnTCo29Jjw7wcB6Krsakq90JNaULAK8XpdR9bNM3dtLw6eHSCizly9DN0_PbDAgza0VRelRW7oExFfSQb5V15kBw_AGeRh_8xBCOlJ1BEF-w8bR0KHOY5cMvSF9qK2FN4P8vP58vpIW5eKbnzkF1sI9W0JVdhrT2PFWiZQn3GTTykLsXDF91vG5tO7fDvCClKOAdz8q7kZb13TcJbgve9ZGV48xtcKNMo0bvaijCZFAkYIkYEm34ED2YPcA"
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
    return true//!!this.getToken();
  }
}