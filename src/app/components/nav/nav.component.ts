import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  fullName: string;
  userId: number;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.controlAuthentication() == true) {
      this.fullName = this.getFullName();
      this.getUser();
    }
  }

  controlAuthentication(): boolean {
    return this.authService.isAuthenticated();
  }

  getFullName(): string {
    return localStorage.getItem('fullName');
  }

  getUser(): number {
    this.userService.getUsers().subscribe((response) => {
      response.data.forEach((user) => {
        if (user.email == this.getFullName()) {
          this.userId = user.id;
        }
      });
    });
    return this.userId;
  }

  logout() {
    this.authService.logout();
  }
}
