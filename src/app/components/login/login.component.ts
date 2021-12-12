import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username$: Observable<string> = new Observable(subscriber => subscriber.next(""));
  password$: Observable<string> = new Observable(subscriber => subscriber.next(""));

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  setUsername() {

  }

  setPassword() {

  }

  login() {
    
  }

}
