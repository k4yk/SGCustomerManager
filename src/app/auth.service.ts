import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subject = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.subject.asObservable();

  constructor() { 
    this.subject.next(!!localStorage.getItem("token"));
  }

  private users = [{userName: "admin", password: "admin", displayName: "Admin"}];

  public login(userName: string, password: string) {
    let user = this.users.find(i => i.userName === userName);
    if (user?.password === password) {
      localStorage.setItem("token", JSON.stringify(user));
    }
  }
}
