import { Component } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, User } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;
  isSignUp: boolean = false; // Flag for toggling between sign-up and login

  constructor(private auth: Auth, private router: Router) {}

  // Save token to localStorage
  private saveToken(user: User): void {
    user.getIdToken().then(token => {
      localStorage.setItem('authToken', token); // Store token in localStorage
      console.log('Token saved to localStorage:', token);
    }).catch(error => {
      console.error('Error saving token:', error);
    });
  }

  // Google login method
  async loginWithGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(this.auth, provider);
      const user = userCredential.user;

      // Save token after successful login
      this.saveToken(user);

      // Reintroduce the console log for debugging
      console.log(this.auth.currentUser ? this.auth.currentUser : 'No user signed in.');
    
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  // Email login method
  async loginWithEmail(): Promise<void> {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in both fields.';
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, this.email, this.password);
      const user = userCredential.user;

      // Save token after successful login
      this.saveToken(user);

      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  // Sign-up with email method
  async signUpWithEmail(): Promise<void> {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in both fields.';
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      const user = userCredential.user;

      // Save token after successful sign-up
      this.saveToken(user);

      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  // Toggle between sign-up and login form
  toggleSignUp(): void {
    this.isSignUp = !this.isSignUp;
  }

  // Optionally, you can call this method to check the token on component initialization
  ngOnInit(): void {
    // const auth = getAuth();
    // if (auth.currentUser) {
    //   this.saveToken(auth.currentUser);
    // }
  }
}