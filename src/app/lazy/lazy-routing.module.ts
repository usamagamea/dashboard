import { StudentViewComponent } from './../portalmodel/view/student-view.component';
import { StudentProfileComponent } from './../portalmodel/profile/student-profile.component';
import { StudentsListComponent } from './../portalmodel/list/students-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
  {path:'' , redirectTo:'lazy/login' , pathMatch:'full'},
{path:'login' , component:LoginComponent},
{path:'register' , component:RegisterComponent},
{path:'list', component:StudentsListComponent },
{path:'profile',component:StudentProfileComponent},
{path:'view', component:StudentViewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
