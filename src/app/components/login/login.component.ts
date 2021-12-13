import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
