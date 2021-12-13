import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsValidationService } from './credentials-validation.service';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private validationService: CredentialsValidationService) {
    this.getIsAuthenticated();
  }

  public validationResult: string[] = [];

  private mockUsers = [new User("admin", "admin", "Mock Admin")];

  public login(userName: string, password: string) {
    const validationResult = this.validationService.validate(userName, password, this.mockUsers);
    this.validationResult = validationResult;
    if (validationResult.length === 0) {
      const user = this.mockUsers.find(i => i.getUsername() === userName);
      localStorage.setItem("token", JSON.stringify(user));
      this.router.navigate([""]);
    }
  }

  public logout() {
    localStorage.removeItem("token");
  }

  public getIsAuthenticated() {
    return !!localStorage.getItem("token");
  }

  public getLoggedInUserDisplayName() {
    return JSON.parse(localStorage.getItem("token")!).displayName;
  }
}
