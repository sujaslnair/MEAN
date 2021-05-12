import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{FormBuilder,Validators}from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import{AuthService} from '../auth.service';
import{Router}from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
age:string;
symptom:string;
place:string;
people:string;
count:number;
  employee=<any>{}
  constructor(private _auth:AuthService,private _router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
userSurvey(){
  this.count=0;
  this.age=this.employee.age;
  this.symptom=this.employee.age;
  this.place=this.employee.age;
  this.people=this.employee.age;

  console.log("inside survey1"+this.employee.age);
  console.log("inside survey2"+this.employee.symptom);
  console.log("inside survey3"+this.employee.place);
  console.log("inside survey4"+this.employee.people);
  if(this.employee.age==="no")
  {console.log("inside survey"+this.count);
   this. count++;
  }
  if(this.employee.symptom==="yes")
  {console.log("inside survey1"+this.count);
    this.count++;
  }
  if(this.employee.place==="yes")
  {console.log("inside survey2"+this.count);
    this.count++;
  }
  if(this.employee.people==="yes")
  {console.log("inside survey3"+this.count);
    this.count++;
  }
  console.log(this.count);
  if(this.count<2){
    this._router.navigate(['/login']);
  }
  else{
    alert("You are at high risk.Please follow government COVID 19 Guidelines");
  }
}
}
