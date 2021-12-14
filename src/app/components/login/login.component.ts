import { Component, OnInit } from '@angular/core';
import { faAddressBook, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  validationResults: string[] = [];

  logoIcon = faAddressBook;
  userIcon = faUser;
  passwordIcon = faKey;

  constructor(private authService: AuthService) { 
  }

  ngOnInit(): void {
  }

  public isValid() {
    return this.getValiationResults().length === 0;
  }

  public login() {
    this.authService.login(this.username, this.password);
    this.validationResults = this.getValiationResults();
  }

  private getValiationResults() {
    return this.authService.validationResult;
  }

}
