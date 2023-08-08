import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/login`, loginData);
  }

  register(name: string, email: string, password: string): Observable<any> {
    const registerData = { name, email, password };
    return this.http.post<any>(`${this.apiUrl}/register`, registerData);
  }

  forgotPassword(email: string): Observable<any> {
    const forgotPasswordData = { email };
    return this.http.post<any>(
      `${this.apiUrl}/forgot-password`,
      forgotPasswordData
    );
  }
}
