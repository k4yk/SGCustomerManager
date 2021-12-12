import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _authService: AuthService) {
    this.displayName = this._authService.getLoggedInUserDisplayName();
  }

  ngOnInit(): void {
  }

  onLogoutClicked() {
    this._authService.logout();
  }

  title = 'Customer Manager';
  displayName = '';

}
