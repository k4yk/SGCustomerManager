import { Injectable } from '@angular/core';
import { isNullOrUndefinedOrEmpty } from './validation-helper';

@Injectable({
  providedIn: 'root'
})
export class CustomerValidationService {

  constructor() { }

  validate(name: string, originState: string): string[] {
    const messages: string[] = [];
    if (isNullOrUndefinedOrEmpty(name)) {
      messages.push("Please specify name!");
    }
    if (isNullOrUndefinedOrEmpty(originState)) {
      messages.push("Please specify origin state!");
    }
    return messages;
  }
}
