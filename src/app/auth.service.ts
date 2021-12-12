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

  private mockUsers = [new User("admin", "admin", "Admin")];

  public login(userName: string, password: string) {
    let user = this.mockUsers.find(i => i.getUsername() === userName);
    if (user?.getPassword() === password) {
      localStorage.setItem("token", JSON.stringify(user));
      this._router.navigate([""]);
    } else {
    }
  }

  public logout() {
    localStorage.removeItem("token");
  }

  public getIsAuthenticated() {
    return !!localStorage.getItem("token");
  }
}
