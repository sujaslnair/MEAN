import { Component, OnInit } from '@angular/core';
import{AuthService} from '../auth.service';
import{Router}from '@angular/router';
import{FormBuilder,Validators}from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent implements OnInit {
  loginDoctorDetails={demail:"",dpwd:""};
  constructor(private _auth:AuthService,private _router:Router,private fb:FormBuilder) { }

  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern("^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$")]],
    password:['',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]+.{8,}")]]
  })

  ngOnInit(): void {
    
  }

  loginDoctor()
  {
    console.log(this.loginForm.value);

    this._auth.loginDoctor(this.loginForm.value)
    .subscribe(
      res=>{console.log(res)
        // console.log("above navigate user");
        // localStorage.setItem('token',res["token"])
        localStorage.setItem('token','user');
        this._auth.setter(res);
         this._router.navigate(['/dview']);
      },
      err=>{
        if(err instanceof HttpErrorResponse){        
          console.log(err.error);
          if(err.status===401){
            this.loginForm.get('email').setErrors({serverError:"Email doesnt exist"})
            // alert("username or password invalid");
          }
          if(err.status===402){
            this.loginForm.get('password').setErrors({serverError:"Invalid Password"})
            // alert("username or password invalid");
          }
        }           
    }
    )
  }

}
