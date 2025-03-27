import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { Auth } from '@angular/fire/auth';
import { CacheService } from './services/cache.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'art-currency-exchange';
  token: string | null = null;

  constructor(private auth: Auth, private cache: CacheService) {}

  ngOnInit(): void {
    this.checkForToken();
  }

  private async checkForToken(): Promise<void> {
    this.token = this.cache.getToken();
    if (this.token) {
      console.log('Token retrieved from localStorage:', this.token);
    } else {
      try {
        const user = this.auth.currentUser;
        if (user) {
          this.token = await user.getIdToken();
          localStorage.setItem('authToken', this.token);
          console.log('Token retrieved and stored:', this.token);
        } else {
          console.log('No user is signed in.');
        }
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    }
  }
}