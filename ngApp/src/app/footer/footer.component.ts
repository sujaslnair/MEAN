import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import{Router}from '@angular/router';
// import{FormBuilder,Validators}from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  doctorData = this.fb.group(
    { name :['',[Validators.required,Validators.maxLength(14)]],
    // uemail:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    email:['',[Validators.required,Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}$')]],
    id:['',Validators.required],
    address:['',Validators.required],
    mno:['',[Validators.required,Validators.pattern("^[0-9]*$"),
    Validators.minLength(10),Validators.maxLength(10)]],
     place:['',[Validators.required,Validators.pattern("^[A-Za-z]*$")]],
     special:['',[Validators.required,Validators.pattern("^[A-Za-z]*$")]],
      // pwd:['',[Validators.required,Validators.pattern("^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,20})$")]]
      pwd:['',[Validators.required,Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+.{8,}')]]
   })
  
  constructor(private _auth:AuthService,private _router:Router,private fb:FormBuilder) { }
  
  ngOnInit(): void {
  }

  registerDoctor(){
    this.doctorData.value.place=this.doctorData.value.place.toLowerCase();
    this._auth.registerDoctor(this.doctorData.value)
    .subscribe(
           res=>{
        console.log(res)
                 this._router.navigate(['/doclogin']);
      },
      err=>{
        // console.log(err);
      if(err instanceof HttpErrorResponse){
       
        if(err.status===406){
          this.doctorData.get('email').setErrors({serverError:"Email already exists"})
        }
      }}
    )
    // console.log(this.registeredUser);
  
  }

}
