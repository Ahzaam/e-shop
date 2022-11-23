import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthenticateService } from 'src/app/Service/authenticate.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: User | any;
  constructor(private auth: AuthenticateService) {}

  ngOnInit(): void {
    this.auth.isUserAvailable().subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.auth.signOut();
  }
}
