import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import{FormsModule}from '@angular/forms';
import{HttpClientModule,HTTP_INTERCEPTORS}from '@angular/common/http';
import{AuthService} from './auth.service';
import{ReactiveFormsModule}from '@angular/forms';
import { UserComponent } from './user/user.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import{BsDatepickerModule}from 'ngx-bootstrap/datepicker';
import { BookscheduleComponent } from './bookschedule/bookschedule.component';
import { DoctorviewComponent } from './doctorview/doctorview.component';
import { AdmineditComponent } from './adminedit/adminedit.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import{FooterComponent}from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    UserregistrationComponent,
    UserComponent,
    DoctorloginComponent,
   
    BookscheduleComponent,
    DoctorviewComponent,
    AdmineditComponent,
    AdminLoginComponent,
    UserhomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
