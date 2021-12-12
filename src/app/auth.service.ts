import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router) {
    this.getIsAuthenticated();
  }

  public isCredentialsAreValid = true;

  private mockUsers = [new User("admin", "admin", "Mock Admin")];

  public login(userName: string, password: string) {
    let user = this.mockUsers.find(i => i.getUsername() === userName);
    if (user?.getPassword() === password) {
      this.isCredentialsAreValid = true;
      localStorage.setItem("token", JSON.stringify(user));
      this._router.navigate([""]);
    } else {
      this.isCredentialsAreValid = false;
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
