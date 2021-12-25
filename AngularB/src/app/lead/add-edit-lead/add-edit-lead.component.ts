import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-edit-lead',
  templateUrl: './add-edit-lead.component.html',
  styleUrls: ['./add-edit-lead.component.css']
})
export class AddEditLeadComponent implements OnInit {

//   userForm:FormGroup;

   constructor(private service:ServiceService) {
// this.userForm=new FormGroup({
// name:new FormControl('',Validators.required)

// })

   }

  
  @Input() lead:any;
  Lid:number | undefined;
  Lname:string | undefined;
  Laddress:string | undefined;
  Lphone:string | undefined;
  Lemail:string | undefined;
  Lgender:string | undefined;
  
  ngOnInit(): void {
   this.Lid=this.lead.Lid;
   this.Lname=this.lead.Lname;
   this.Laddress=this.lead.Laddress;
   this.Lphone=this.lead.Lphone;
   this.Lemail=this.lead.Lemail;
   this.Lgender=this.lead.Lgender;
  
  }
  onSubmit(form:any)
  {
    console.log(form);
   // *ngIf="lead.Lid==0"
   if(this.lead.Lid==0)
   {
    this.service.addLead(form);
   }
   if(this.lead.Lid!==0)
   {
    this.service.updateLead(form);
   }
     
  
  }
  
  addLead(){
    
    var val={Lid:this.Lid,Lname:this.Lname,Laddress:this.Laddress,Lphone:this.Lphone,Lemail:this.Lemail,Lgender:this.Lgender};
    console.log(val);
    // this.service.addLead(val).subscribe(res=>
    // {alert(res.toString());
    //   });

      
    }
  
    updateLead(){
      var val={Lid:this.Lid,Lname:this.Lname,Laddress:this.Laddress,Lphone:this.Lphone,Lemail:this.Lemail,Lgender:this.Lgender};
      // this.service.updateLead(val).subscribe(res=>
        // {alert(res.toString());
       // });
  
    }
  } 
  

/*

  @Input() lead:any;
  LeadId:string|undefined;
  Name:string|undefined;
  City:string|undefined;
  State:string|undefined;
  Gender:string|undefined;
  PhoneNo:string|undefined;
  Remark:string|undefined;
  CreatedBy:string|undefined;
  Status:string|undefined;

  ngOnInit(): void {
    this.LeadId=this.lead.LeadId;
    this.Name=this.lead.Name;
    this.City=this.lead.City;
    this.State=this.lead.State;
    this.Gender=this.lead.Gender;
    this.PhoneNo=this.lead.PhoneNo;
    this.Remark=this.lead.Remark;
    this.CreatedBy=this.lead.CreatedBy;
    this.Status=this.lead.Status;
  }

  addLead()
  {
    var val={
      LeadId:this.LeadId,
      Name:this.Name,
      City:this.City,
      State:this.State,
      Gender:this.Gender,
      PhoneNo:this.PhoneNo,
      Remark:this.Remark,
      CreatedBy:this.CreatedBy,
      Status:this.Status

    };
    this.service.addLead(val).subscribe(res=>{alert(res.toString());});

  }

  updateLead()
  {
    var val={
      LeadId:this.LeadId,
      Name:this.Name,
      City:this.City,
      State:this.State,
      Gender:this.Gender,
      PhoneNo:this.PhoneNo,
      Remark:this.Remark,
      CreatedBy:this.CreatedBy,
      Status:this.Status

    };
    this.service.updateLead(val).subscribe(res=>{alert(res.toString());});
  }




}
*/