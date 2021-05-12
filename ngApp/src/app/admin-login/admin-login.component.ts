import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators}from '@angular/forms';
import{AuthService} from '../auth.service';
import{Router}from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
erroremail="";
errorpwd="";
  constructor(private _auth:AuthService,private _router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  adminLogin=this.fb.group({
    email:['',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password:['',Validators.minLength(6)]
  })
loginAdmin(){
  console.log("Admi Login");
  console.log(this.adminLogin.value)
  if((this.adminLogin.value.email=='admin@gmail.com')&& 
  (this.adminLogin.value.password=='Admin@123')){
    localStorage.setItem('token','user');
    this._router.navigate(['/schedule']);
  }
  else{
    this._router.navigate(['/adminLogin']);
    this.adminLogin.get('password').setErrors({serverError:"Invalid Email/Password"})
  // alert("Invalid");
  }
  // this._router.navigate(['/schedule']);
  // this.adminLogin.get('email').setErrors({serverError:"invalid Entry"})
  // alert("Invalid");
}

}
