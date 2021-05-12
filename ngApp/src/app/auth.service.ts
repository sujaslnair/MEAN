import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl ="http://localhost:3000/api/userregister";
  private _loginUrl ="http://localhost:3000/api/userlogin";

  private _registerDUrl ="http://localhost:3000/api/dregister";
  private _loginDUrl ="http://localhost:3000/api/dlogin";

   details={};
  constructor(private http:HttpClient) { }
  registerUser(user){
    console.log(user);
    return this.http.post<any>(this._registerUrl,user);
  }

  loginUser(user){
    console.log(user);
    return this.http.post<any>(this._loginUrl,user);
  }

//Doctor

  registerDoctor(user){
    console.log(user);
    return this.http.post<any>(this._registerDUrl,user);
  }

  loginDoctor(user){
    console.log(user);
    return this.http.post<any>(this._loginDUrl,user);
  }
  setter(res){
    console.log("inside setter of authservice");
    console.log(res);
    this.details=res;
  }
  ret(){
    return this.details;
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
}
