import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private router: Router,
  ) { }

  setUser() {
    let user = {
      logged: true,
      user: {
        a: "a",
        b: "b"
      }
    }
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return localStorage.getItem('user');
  }

  deleteUser() {
    this.router.navigate(['/login']);
    localStorage.removeItem('user');
  }

  cleanLocalStorage() {
    localStorage.clear();
  }

  loginStatus(): boolean {
    var user = this.getUser();
    if (user != null && this.isJSON(user)) {
      user = JSON.parse(user);
      return true;
    } else {
      return false;
    }
  }

  public isJSON(str): boolean {
    if (/^\s*$/.test(str)) return false;
    str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
    str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
    str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
    return (/^[\],:{}\s]*$/).test(str);
  }

}
