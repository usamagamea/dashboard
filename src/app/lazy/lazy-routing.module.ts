import { AuthGuard } from './../auth.guard';
import { StudentViewComponent } from './../portalmodel/view/student-view.component';
import { StudentProfileComponent } from './../portalmodel/profile/student-profile.component';
import { StudentsListComponent } from './../portalmodel/list/students-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';



const routes: Routes = [
  {path:'', component:LoginComponent},
{path:'login', component:LoginComponent},
{path:'register',  component:RegisterComponent},
{path:'list' ,canActivate:[AuthGuard] , component:StudentsListComponent },
{path:'profile' ,canActivate:[AuthGuard] ,component:StudentProfileComponent},
{path:'view' ,canActivate:[AuthGuard] , component:StudentViewComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
