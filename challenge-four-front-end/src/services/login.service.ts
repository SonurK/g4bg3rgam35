import { Injectable } from '@angular/core';
import { GET_USERS_MOCKS } from '../models/user-mocks.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public availableUsers: Array<any> = new Array;

  constructor() {
    this.availableUsers = GET_USERS_MOCKS();
  }

  validateUser(form): boolean {
    var user = this.availableUsers.find((element) => {
      if (element.name == form.value.name) {
        return element
      }
    });
    if (user != undefined) {
      let userExists = this.validatePassword(user, form);
      return userExists;
    } else {
      return false;
    }
  }

  validatePassword(user, form): boolean {
    if (user.password === form.value.password) {
      
      return true;
    } else {
      return false;
    }
  }
}
