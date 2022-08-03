import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {}
  
  logout() {
    this.authService.logout();
  }
}
