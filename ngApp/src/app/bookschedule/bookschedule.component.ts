import { Component, OnInit } from '@angular/core';
import{EventService}from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import {Router}from '@angular/router';

@Component({
  selector: 'app-bookschedule',
  templateUrl: './bookschedule.component.html',
  styleUrls: ['./bookschedule.component.css']
})
export class BookscheduleComponent implements OnInit {
username:String;
adminView=<any>[];
  constructor(private event:EventService,private _router:Router) { }

  ngOnInit(): void {
    // this.username=   localStorage.getItem('UserName'); 
    this.event.getAdminView().subscribe((data)=>{
      console.log("inside bookschedule.component ts");
        this.adminView=JSON.parse(JSON.stringify(data));
      })

  }
delete(item){
  if(confirm("Are you sure you want to delete this doctor?")==true){
    this.event.deleteDetails(item._id)
    location.reload();
    
  }
  else{
    location.reload();
  }
 
}

slotChange(){
  if(confirm("Are you sure you want to refresh the slot?")==true){
    console.log(this.adminView);
        this.event.slotChange();
   
     location.reload();
    
  }
 
}

}
