import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted: boolean = false;
  loginMethods: Array<string> = [];
  redirectUrl: string;
  appName: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.redirectUrl = params['redirectUrl'];
        this.loginMethods = params['loginMethods'];
        this.appName = params['appName'];
        // const deserializedObject = JSON.parse(decodeURIComponent(params));
        // Now you have your object in deserializedObject
        // console.log(deserializedObject);
      }
    });
  }

  loginUser() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authService.login(email, password).subscribe(
      (response) => {
        // Handle successful login here (e.g., store authentication token, redirect, etc.)
        console.log('Login successful:', response);
        window.location.replace(`${this.redirectUrl}/?token=${response.token}`);
      },
      (error) => {
        // Handle login error here (e.g., show error message)
        console.error('Login failed:', error);
      }
    );
  }
}
