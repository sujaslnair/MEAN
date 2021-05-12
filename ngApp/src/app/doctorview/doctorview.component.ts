import { Component, OnInit } from '@angular/core';
import{AuthService}from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Router}from '@angular/router';

@Component({
  selector: 'app-doctorview',
  templateUrl: './doctorview.component.html',
  styleUrls: ['./doctorview.component.css']
})
export class DoctorviewComponent implements OnInit {
  title:String="Appointment Details";
  appointment=<any>{};
  constructor(private event:AuthService,private _router:Router) { }

  ngOnInit(): void {
    console.log("inside oninit of doctor view");
this.appointment=this.event.ret();
console.log(this.appointment);
    // this.event.getAppointment().subscribe((data)=>{
    //   this.appointment=JSON.parse(JSON.stringify(data));
    // })
  }

}
