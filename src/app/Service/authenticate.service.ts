import { Injectable } from '@angular/core';
// import { LoginState, User } from '../Model/user';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  public g_user: User | any;
  public user: any;
  constructor(private fireAuth: AngularFireAuth) {}

  // Sign in with email/password
  SignInWithEmail(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  // Sign in with Google
  GoogleAuth() {
    return this.authLogin(new GoogleAuthProvider());
  }

  githubAuth() {
    return this.authLogin(new GithubAuthProvider());
  }

  private authLogin(provider: any) {
    return this.fireAuth
      .signInWithPopup(provider)
      .then((result) => {
        result.additionalUserInfo?.isNewUser;

        this.isUserAvailable().subscribe((user) => {
          this.g_user = user;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  signOut() {
    this.fireAuth.signOut();
  }

  isUserAvailable() {
    return this.fireAuth.authState;
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') as string);
    return user !== null &&
      (user.emailVerified !== false ||
        user.providerData[0].providerId === 'facebook.com')
      ? true
      : false;
  }
}
