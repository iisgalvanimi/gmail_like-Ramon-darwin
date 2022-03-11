import { Component } from '@angular/core';
import { Email } from 'models/email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-ramondarwin';
  emails:Email[];   // <-- component property
  constructor(){
    this.emails = [
      new Email('provaa', 'oggetto', 'messaggio'),
      new Email('Fullstack', 'http://fullstack.io', 'messaggio'),
      new Email('Angular Homepage', 'http://angular.io', 'messaggio'),
    ];
  }
}
