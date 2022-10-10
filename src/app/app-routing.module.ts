import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [

  // {path:'form' , component: FormComponent},
  {path:'', component: HomeComponent},
  { path : "resume", component: ResumeComponent},
  { path : "form/personal-details", component: FormComponent},
  { path : "form/education", component: FormComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
