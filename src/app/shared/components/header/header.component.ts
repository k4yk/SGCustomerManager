import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
