import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginUserForm: FormGroup;
  public errorMark: boolean;
  public loading: boolean;

  constructor(
    private router: Router,
    public login: LoginService,
    public authenticationService: AuthenticationService,
  ) {
    this.errorMark = false;
    this.loading = false;

    this.loginUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  validateLogin() {
    if (this.loginUserForm.valid) {
      this.loading = true;
      setTimeout(() => {
        if (this.login.validateUser(this.loginUserForm)) {
          this.loading = false;
          this.errorMark = false;
          this.authenticationService.setUser()
          this.router.navigate([`shipping/shipping-label-maker/${this.loginUserForm.value.name}`]);
        } else {
          this.errorMark = true;
          this.loading = false;
        }
      }, 1500);
    }
  }

}
