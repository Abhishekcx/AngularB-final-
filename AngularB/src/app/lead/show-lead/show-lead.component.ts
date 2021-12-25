import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-show-lead',
  templateUrl: './show-lead.component.html',
  styleUrls: ['./show-lead.component.css']
})
export class ShowLeadComponent implements OnInit {

  constructor(private service:ServiceService) { }


  LeadList:any=[];
  ModalTitle:string="";
  ActivateAddEditLeadComp:boolean=false;
  lead:any;
  filterTerm:any;

  ngOnInit(): void {
    this.refreshLeadList();
  }

  
  addClick(){
    this.lead={
      Lid:0,
      Lname:"",
      Laddress:"",
      Lphone:"",
      Lemal:"",
      Lgender:""
    }
    this.ModalTitle="Add Lead";
    this.ActivateAddEditLeadComp=true;
    this.refreshLeadList();
  }

  editClick(item:any){
    this.lead=item;
    this.ModalTitle="Edit Lead";
    this.ActivateAddEditLeadComp=true;
      }

      deleteclick(item:any)
      {
      if(confirm('are you sure want to delete?'))
      {
        this.service.deleteLead(item.Lid).subscribe(data=>{
        // alert(data.toString());
        alert("data deleted Successfully");
         this.refreshLeadList();
        })
      }
    }

      
  closeclick(){
    this.ActivateAddEditLeadComp=false;
    this.refreshLeadList();
    }
 
  refreshLeadList(){
    this.service.getLeadList().subscribe(data=>{
      this.LeadList=data;
    });
  }


}


  /*
  LeadList:any=[];
  ModalTitle:string|undefined;
  ActivateAddEditLeadComp:boolean=false;
  lead:any;


  ngOnInit(): void {
    this.refreshLeadList();
  }

  addClick()
  {
    this.lead={
      LeadId:0,
      Name:"",
      City:"",
      State:"",
      Gender:"",
      PhoneNo:"",
      Remark:"",
      CreatedBy:"",
      Status:""
    }
    this.ModalTitle="Add Lead";
    this.ActivateAddEditLeadComp=true;
  }

  editClick(item:any)
  {
    console.log(item);
    this.lead=item;
    this.ModalTitle="Edit Lead";
    this.ActivateAddEditLeadComp=true;
  }

  deleteClick(item:any)
  {
    if(confirm('Are You Sure??'))
    {
      this.service.deleteLead(item.LeadId).subscribe(data=>{
        alert(data.toString());
        this.refreshLeadList();
      })
    }
  }

  closeClick()
  {
    this.ActivateAddEditLeadComp=false;
    this.refreshLeadList();
  }


  refreshLeadList()
  {
    this.service.getLeadList().subscribe(data=>{
      this.LeadList=data;
    });

  }



}
*/