import { Component, Input, OnInit } from '@angular/core';
import { Email } from 'models/email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent implements OnInit {
  ngOnInit(): void {

  }
  @Input() email : Email = null!;
  show = false;
  onShowHide(): boolean{
    this.show = !this.show;
    return false;  
  }

}
