import { Component, OnInit } from '@angular/core';
import { faAddressBook, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoIcon = faAddressBook;
  userIcon = faUser;
  signOutIcon = faSignOutAlt;

  constructor(private authService: AuthService) {
    this.displayName = this.authService.getLoggedInUserDisplayName();
  }

  ngOnInit(): void {
  }

  public onLogoutClicked() {
    this.authService.logout();
  }

  public title = 'Customer Manager';
  public displayName = '';

}
