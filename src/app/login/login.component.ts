import { Component, OnInit } from '@angular/core';
import { Credential } from '../credential';
import { LoggedInComponent } from '../logged-in/logged-in.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Credential = {userName: '' , passWord : ''};
  status: string;
  constructor() { }

  ngOnInit() {
  }

  validate(){
    if(this.user.userName === 'india' && this.user.passWord === 'india'){
        this.status = 'valid user';
        // <LoggedInComponent><LoggedInComponent>;
         } else {
          this.status = 'in valid user';
         }

  }
}
