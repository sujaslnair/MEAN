import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _doctorUrl ="http://localhost:3000/api/doctor";
  private _docUrl ="http://localhost:3000/api/doctor/slot";
  details={};

  constructor(private http:HttpClient) { }
  getdetails(place){
    console.log(place);
    return this.http.post<any>(this._doctorUrl,{"loc":place});
  }
  getAdminView(){
    return this.http.get("http://localhost:3000/api/adminView");
  }
  postDetails(date,username,details,slot){

    console.log(date+username+details+slot);
   return this.http.post(this._docUrl,{"date":date,"username":username,"details":details,"slot":slot})
   .subscribe(res=>{console.log(res);
   alert("Appointment Fixed for "+username+"  on "+date);
  // this.details=JSON.parse(JSON.stringify(res));
  location.reload();
},
err=>{console.log(err)})
  }
deleteDetails(id){
  return this.http.delete("http://localhost:3000/api/delete/"+id)
  .subscribe(res=>{
      // this.adminView.splice(this.adminView.indexOf(item),1);
      // location.reload();
      // this.adminView=JSON.parse(JSON.stringify(res));
      console.log(res);
    })
}
showDetails(id){
  console.log("inside eventservice show product"+id);
    return this.http.get(`http://localhost:3000/api/edit/${id}`)
}
editAdmin(id:any,item){
  // let url=`${this.baseUri}/update/${id}`
  console.log("inside edit product in service ts");
  return this.http.post(`http://localhost:3000/api/update/${id}`,item)
  // .subscribe((data)=>{console.log(data)})
}
slotChange(){
  console.log("inside slot change in service ts");
  return this.http.get("http://localhost:3000/api/slotchange")
  .subscribe(res=>{
console.log(res);
  },err=>console.log(err))
}
 
}
