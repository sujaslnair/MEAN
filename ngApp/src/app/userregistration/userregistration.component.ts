import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import{Router}from '@angular/router';
import{FormBuilder,Validators}from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
userData={uname:'',uemail:'',uid:'',umno:'',uplace:'',uage:'',upwd:''}
userRegister = this.fb.group(
  { uname :['',[Validators.required,Validators.maxLength(13)]],
  //  uemail:['',[Validators.required,Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")]],
   uemail:['',[Validators.required,Validators.pattern('^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$')]],
  uid:['',[Validators.required,Validators.maxLength(10)]],
  umno:['',[Validators.required,Validators.pattern("^[0-9]*$"),
  Validators.minLength(10),Validators.maxLength(10)]],
   uplace:['',[Validators.required,Validators.pattern("^[A-Za-z]*$")]],
    uage:['',[Validators.required,Validators.maxLength(3)]], 
     upwd:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+.{8,}")]]
    // upwd:['',[Validators.required,Validators.pattern('^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,15})$')]]
 })

constructor(private _auth:AuthService,private _router:Router,private fb:FormBuilder) { }

registerUser(){
  this._auth.registerUser(this.userRegister.value)
  .subscribe(
       res=>{
      console.log(res)
      // localStorage.setItem('token',res["token"]);
      this._router.navigate(['/login']);
    },
    err=>{
      // console.log(err);
    if(err instanceof HttpErrorResponse){
      const validationerror=err.error;
      if(err.status===406){
        this.userRegister.get('uemail').setErrors({serverError:"Email already exists"})
      }
    }}
  )}
  // console.log(this.registeredUser);
    

  ngOnInit(): void {
  }

}
