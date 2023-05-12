import { Injectable } from '@angular/core';
// import { LoginState, User } from '../Model/user';
import { Auth } from '@angular/fire/auth';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { observable, Observable, Subscriber } from 'rxjs';
import { User } from 'firebase/auth';
import { DatabaseService } from './database.service';
import { SiteUser } from '../Model/siteuser';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  public g_user: User = <User>{};
  public site_user: SiteUser | null | undefined;
  // is_loaded: Observable<boolean> | undefined

  is_loaded: boolean = false;
  is_logged_in: boolean = false;

  constructor(private fireAuth: AngularFireAuth, private db: DatabaseService) {
    this.getUserRealtime()
  }

  // Sign in with email/password
  SignInWithEmail(email: string, password: string) {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  // Sign in with Google
  GoogleAuth() {
    return this.authLogin(new GoogleAuthProvider());
  }

  isLoggedIn() {
    return new Observable<boolean>((observer) => {

      this.fireAuth.authState.subscribe((user) => {
        if (user) {
          this.is_logged_in = true;
          observer.next(true);
        } else {
          observer.next(false);
        }
      })

    })

  }



  githubAuth() {
    return this.authLogin(new GithubAuthProvider());
  }


  getUserRealtime() {

    this.fireAuth.authState.subscribe((user) => {
      this.is_loaded = true
      if (user) {
        this.is_logged_in = true
        this.g_user = <User>user
        this.db.getUserRealtime(user.uid).subscribe((user) => {
          this.site_user = user

        })
      } else {
        this.site_user = undefined
      }
    })
  }



  private authLogin(provider: any) {
    return this.fireAuth
      .signInWithPopup(provider)
      .then((result) => {
        if (result.additionalUserInfo?.isNewUser) {
          const site_user: SiteUser = <SiteUser>{};
          site_user.email = <string>result.user?.email;
          site_user.profile_photo = <string>result.user?.photoURL
          site_user.uid = <string>result.user?.uid;
          site_user.name = <string>result.user?.displayName;
          // result.user?.sendEmailVerification();
          this.db.createUser(site_user).then(() => {
            this.site_user = site_user;
          });
        } else {
          this.getUserRealtime()
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  signOut() {
    this.fireAuth.signOut()
    this.site_user = undefined
    this.g_user = <User>{}
    this.is_logged_in = false
    window.location.href = '/'
  }



}
