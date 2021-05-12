import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators}from '@angular/forms';
// import{AuthService} from '../auth.service';
// import{Router}from '@angular/router';
import { ActivatedRoute, Router } from "@angular/router";
import { EventService } from '../event.service';
@Component({
  selector: 'app-adminedit',
  templateUrl: './adminedit.component.html',
  styleUrls: ['./adminedit.component.css']
})
export class AdmineditComponent implements OnInit {
appointment=<any>{}

  constructor(private event:EventService,private _router:Router,private fb:FormBuilder,
    private actRoute: ActivatedRoute) { 

      
    }

  ngOnInit(): void {
    console.log("inside update");    
    let id = this.actRoute.snapshot.paramMap.get('id');
    console.log(id);
    this.show(id);
 }
 editAdminForm = this.fb.group(

  { doctorName :['',[Validators.required,Validators.pattern('^[A-Za-z]{3,12}$')]],
  mno:['',[Validators.required,Validators.pattern("^[0-9]*$"),
  Validators.minLength(10),Validators.maxLength(10)]],
  address:['',Validators.required],
  time:['',Validators.required],
//  date:['',Validators.required],
    slot1:['',Validators.required],
    slot2:['',Validators.required],
    slot3:['',Validators.required],
    slot4:['',Validators.required]
 })


 show(id){
  console.log("inside show");
  this.event.showDetails(id)
  .subscribe((data)=>{
    
   this.appointment=JSON.parse(JSON.stringify(data))
   console.log(this.appointment);
})
}

editAdmin()
{
  let id = this.actRoute.snapshot.paramMap.get('id');
  console.log('called product with id :'+ id);

  if(confirm("Are you sure you want to update this details?")==true){
  this.event.editAdmin(id,this.appointment)
  .subscribe((data)=>{
  this._router.navigate(['/schedule']);
  console.log('Content updated successfully!' + data);
  // alert(' Updated successfully!!');

  }),(err)=>{console.log(err)}
}
this._router.navigate(['/schedule']);
}

}
