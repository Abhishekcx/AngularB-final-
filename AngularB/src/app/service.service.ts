import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  /*
  readonly APIUrl="https://localhost:44356/api";
  readonly PhotoUrl="https://localhost:44327/Photos/";

  constructor(private http:HttpClient) { }

  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }
  addEmployee(val:any)
  {
    return this.http.post(this.APIUrl+'/Employee',val);
  }
  updateEmployee(val:any)
  {
    return this.http.put(this.APIUrl+'/Employee',val);
  }
  deleteEmployee(val:any)
  {
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }
  getLeadList():Observable<any>{
    return this.http.get<any>(this.APIUrl+'/Lead');
  }
  addLead(val:any)
  {
    return this.http.post(this.APIUrl+'/Lead',val);
  }
  updateLead(val:any)
  {
    return this.http.put(this.APIUrl+'/Lead',val);
  }
  deleteLead(val:any)
  {
    return this.http.delete(this.APIUrl+'/Lead/'+val);
  }
  UploadPhoto(val:any)
  {
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }
*/

readonly APIUrl="https://localhost:44356/api"; 
constructor(private http:HttpClient,private router:Router ) { }

getLeadList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/lead');
}

addLead(val:any){
  console.log(val);
  let data={
    Lname:val.Name,
    Laddress:val.Address,
    Lemail:val.Email,
    Lphone:val.Mobile,
    Lgender:val.gender
  }
  console.log(JSON.stringify(data)+"///////////////");
  return this.http.post<any>(this.APIUrl+'/lead',data).subscribe(res=>{
    console.log(res);
    alert(res.toString());
    //window.setTimeout('alert("Message goes here");window.close();', 400);
    //this.router.navigate(['/lead']);
  
  });
}

  

updateLead(val:any){
     
  console.log(val);
  let data={
    Lname:val.Name,
    Laddress:val.Address,
    Lemail:val.Email,
    Lphone:val.Mobile,
    Lgender:val.gender
 
  }
  console.log(JSON.stringify(data)+"///////////////");

  /*
  let data1={

    Lname:data.Lname,
    Laddress:data.Laddress,
    Lemail:data.Lemail,
    Lphone:data.Lphone,
    Lgender:data.Lgender

  }
  */

  return this.http.put(this.APIUrl+'/lead',data).subscribe(res=>{
    console.log(res);
    alert(res.toString());
  });
}

deleteLead(val:any){
  return this.http.delete(this.APIUrl+'/lead/'+val);
}
}
