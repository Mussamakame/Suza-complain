import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    Username!:String;
    Password!:String;
  constructor(private router:Router) {}

  ngOnInit() {
      
  }
  LoginUser(){
    if(this.Username=="Admin" && this.Password =="admin123")
    {
      console.log("Welcome");
    }
  }
  onLogIn(){
    this.router.navigate(['/main'])

  }


}
