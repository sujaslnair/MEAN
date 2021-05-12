import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{UserLoginComponent}from './user-login/user-login.component';
import{HomeComponent}from './home/home.component';
import{UserregistrationComponent}from './userregistration/userregistration.component';
import{UserComponent}from './user/user.component';
import{UserhomeComponent}from './userhome/userhome.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import{BookscheduleComponent}from './bookschedule/bookschedule.component';
import{DoctorviewComponent}from './doctorview/doctorview.component';
import{AdminLoginComponent}from './admin-login/admin-login.component';
import{AdmineditComponent}from './adminedit/adminedit.component';
import{FooterComponent}from './footer/footer.component';
  import { from } from 'rxjs';
const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
  {path:'login',component:UserLoginComponent},
  {path:'register',component:UserregistrationComponent},
  {path:'docreg',component:FooterComponent},
  {path:'doclogin',component:DoctorloginComponent},
  // {path:'justclick',component:FooterComponent},
  {path:'user',component:UserComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'schedule',component:BookscheduleComponent},
  {path:'dview',component:DoctorviewComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'update/:id',component:AdmineditComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
