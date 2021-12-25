import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DemoComponent } from './demo/demo.component';
import { GalleryComponent } from './gallery/gallery.component';
//import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LeadComponent } from './lead/lead.component';
//import { ShowLeadComponent } from './Lead/show-lead/show-lead.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path: 'lead', component:LeadComponent},
  {path:'', redirectTo:'header',pathMatch:'full'},
  {path:'about', component:AboutComponent},
  {path:'offer', component:GalleryComponent},
  {path:'demo',component:DemoComponent}
 
  //{path:'employee',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
