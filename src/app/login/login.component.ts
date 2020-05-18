import { Component, OnInit } from '@angular/core';
import { Motion, MotionEventResult } from "@capacitor/core";
import { Navigation, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Username;
  Password;
  constructor(
    private http:HttpClient,
    private nav:Router
  ) { }

  ngOnInit() {
  }

  onFormSubmit() {
    this.http.post("http://localhost:51354/api/login/login",{username:this.Username,password:this.Password},{headers:{"Content-Type":"application/json"}}).subscribe(x => this.nav.navigateByUrl("home"),err => console.log(err));
    console.log(this.Username);
    console.log(this.Password);
  }

}
