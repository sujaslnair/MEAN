import { Component } from '@angular/core';
import{Router}from '@angular/router';
import{AuthService} from '../app/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngApp';
  constructor(public _auth:AuthService,private _router:Router){ 
  }
  logoutUser(){
    
    localStorage.removeItem('token');
    localStorage.removeItem('UserName');
    this._router.navigate(['/']);
  }
}
