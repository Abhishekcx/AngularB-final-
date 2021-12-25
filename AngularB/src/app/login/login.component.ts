import { Component, OnInit } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*
  username:string | undefined;
  password:string | undefined;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  logIn()
  {
    if(this.username == "admin@gmail.com" && this.password=="Admin@123")
    {
     // this.router.navigate(['/home']);
      //alert("welcome");
      alert("welcome");
      this.router.navigate(['/home']);
       
    }else{
      alert("please enter valid Credentials");
    }
  }

  */


  username:string | undefined;
  password:string | undefined;

  constructor(private router:Router) { }


  ngOnInit(): void {

  }
  logIn()
  {
    if(this.username == "admin11@gmail.com" && this.password=="adm123")
    {
     // this.router.navigate(['/lead']);
      //alert("welcome");
      alert("welcome");
      // this.router.navigate(['/lead']);
      this.router.navigate(['/home']);

       
    }
   
    else
     {
      alert("please enter valid Credentials");
      this.router.navigate(['']);
     }
    
  }

}
