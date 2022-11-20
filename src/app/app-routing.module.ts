import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ListComponent } from './list/list.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home',component:HomeComponent}, //home
  {path: 'about',component:AboutComponent}, //about
  {path: 'faq',component:FaqComponent}, //faq
  {path: 'login',component:LoginComponent}, //login
  {path: 'signup',component:SignupComponent}, //signup
  {path: 'editstudent',component:EditstudentComponent}, //edit
  {path: 'add',component:AddstudentComponent}, //edit
  // {path: 'studentlist',component:StudentlistComponent}, //edit
  {path: 'list',component:ListComponent}, //edit
  // {path: 'add',component:AddstudComponent}, //edit
  {path: 'navbar', component: NavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
