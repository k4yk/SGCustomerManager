import { Injectable } from '@angular/core';
import { User } from './model/user';
import { isNullOrUndefinedOrEmpty } from './validation-helper';

@Injectable({
  providedIn: 'root'
})
export class CredentialsValidationService {

  constructor() { }

  private isUserExist(users: User[], username: string) {
    return users.some(i => i.getUsername() === username);
  }

  private isUsernameNotEmptyButUserNotExists(users: User[], username: string) {
    return !isNullOrUndefinedOrEmpty(username) && !this.isUserExist(users, username);
  }

  validate(username: string, password: string, users: User[]): string[] {
    const messages = [];
    if (isNullOrUndefinedOrEmpty(username)) {
      messages.push("Username is required!");
    }
    if (this.isUsernameNotEmptyButUserNotExists(users, username)) {
      messages.push("User not exists!")
    }
    if (!(this.isUsernameNotEmptyButUserNotExists(users, username)) && isNullOrUndefinedOrEmpty(password)) {
      messages.push("Password is required!");
    }
    if (this.isUserExist(users, username)) {
      const user = users.find(i => i.getUsername() === username);
      if (!isNullOrUndefinedOrEmpty(password) && user!.getPassword() !== password) {
        messages.push("Incorrect password!")
      }
    }
    return messages;
  }
}
