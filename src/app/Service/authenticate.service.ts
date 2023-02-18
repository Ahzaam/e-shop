import { Injectable } from '@angular/core';
// import { LoginState, User } from '../Model/user';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
import { DatabaseService } from './database.service';
import { SiteUser } from '../Model/siteuser';
@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  public g_user: User = <User>{};
  public site_user: SiteUser = <SiteUser>{};

  constructor(private fireAuth: AngularFireAuth, private db: DatabaseService) {
    fireAuth.authState.subscribe((state) => {
      this.g_user = <User>state;
      if (state) {
        console.log(state.uid);
        db.getUser(state.uid).then((user) => {
          this.site_user = user;
          console.log(user);
        });
      }
    });
  }

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
        if (result.additionalUserInfo?.isNewUser) {
          const site_user: SiteUser = <SiteUser>{};
          site_user.email = <string>result.user?.email;
          site_user.uid = <string>result.user?.uid;
          site_user.name = <string>result.user?.displayName;
          // result.user?.sendEmailVerification();
          this.db.createUser(site_user).then(() => {
            this.site_user = site_user;
          });
        } else {
          this.db.getUser(result.user!.uid).then((user) => {
            this.site_user = user;
          });
        }
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
