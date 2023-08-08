import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'iscar-auth';
  appName: string = 'OPA';
  logoUrl: string = './assets/imc-logo.png';
}
