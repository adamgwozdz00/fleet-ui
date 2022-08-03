import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.css'],
})
export class AccountTypeComponent implements OnInit {
  accountTypeName: string = '';

  constructor(private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.accountTypeName = this.authService.getAccountType();
  }
}
