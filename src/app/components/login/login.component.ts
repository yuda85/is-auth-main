import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get formControls() {
    return this.loginForm.controls;
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
        window.location.replace(
          `https://is-auth-next.netlify.app/?token=${response.token}`
        );
      },
      (error) => {
        // Handle login error here (e.g., show error message)
        console.error('Login failed:', error);
      }
    );
  }
}
