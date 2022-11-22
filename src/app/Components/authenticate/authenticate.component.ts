import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthenticateService } from 'src/app/Service/authenticate.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent implements OnInit {
  signin = true;
  signinform: FormGroup;
  error = false;
  constructor(private authService: AuthenticateService, private route: Router) {
    this.signinform = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.authService.isUserAvailable().subscribe((user) => {
      if (user) {
        this.route.navigate(['/']);
      }
    });
  }

  changeSign() {
    this.signin = !this.signin;
  }

  gAuth(e: Event) {
    e.preventDefault();
    this.authService.GoogleAuth().then(() => {
      this.route.navigate(['/']);
    });
  }

  signInWithEmail() {
    if (this.signinform.valid) {
      this.authService
        .SignInWithEmail(
          this.signinform.value.email,
          this.signinform.value.password
        )
        .then(console.log)
        .catch((err) => {
          console.log(err.code);
        });
    }

    // this.authService.SignIn()
  }
}
