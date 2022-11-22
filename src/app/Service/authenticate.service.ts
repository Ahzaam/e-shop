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
  public user: User | any;
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
        this.isUserAvailable().subscribe((user) => {
          this.user = user;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  signOut() {
    this.fireAuth.signOut();
  }
  userData() {
    return this.user;
  }
  isUserAvailable() {
    return this.fireAuth.authState;
  }
}
