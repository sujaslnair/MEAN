import { Component, OnInit } from '@angular/core';
import{EventService}from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Router}from '@angular/router';
import { BookscheduleComponent } from '../bookschedule/bookschedule.component';
import { isUndefined } from 'ngx-bootstrap/chronos/utils/type-checks';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  place:String="";
  minDate: Date;
  maxDate: Date;
  appointment:Date;
  appointment1:String;
  details=<any>[];
  usermail:String;
  username:String;
  slot:String;
  constructor(private event:EventService,private _router:Router) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate()+1);
    this.maxDate.setDate(this.maxDate.getDate() +1);
  
   }
  ngOnInit(): void {
    this.place="location";
    this.username=   localStorage.getItem('UserName');
  }

 bookdate(i,tab){
   console.log(this.appointment);
   console.log((this.appointment).toDateString());
   
this.appointment1=(this.appointment).toDateString();

   console.log(this.details[i]);
   console.log(tab);
   if(tab==1)
   this.slot="slot1";
   if(tab==2)
   this.slot="slot2";
   if(tab==3)
   this.slot="slot3";
   if(tab==4)
   this.slot="slot4";

  //  console.log(this.tabindex)
// this._router.navigate(['/schedule']);
 
this.event.postDetails(this.appointment1,this.username,this.details[i],this.slot);
// // .subscribe(res=>{console.log(res);
// //   alert("Appointment Fixed for "+this.username+"on "+this.appointment);
//   // this.details=JSON.parse(JSON.stringify(res));
//   location.reload();
// },
// err=>{console.log(err)})

 }
  
getlocation(value){
  console.log(value);
  if (value==1){
    this.place="pattom";
  }
  
  if(value==2){
    this.place="sasthamangalam";
  }
  if (value==3){
    this.place="kazhakoottam"
  }
  console.log(this.place);
  this.event.getdetails(this.place)
  .subscribe(res=>{console.log(res);
    this.details=JSON.parse(JSON.stringify(res));
    

    // this.ngOnInit()
  },
  err=>{console.log(err)})
  }
}
