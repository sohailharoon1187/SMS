import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherinformationComponent } from './teacherinformation/teacherinformation.component';


const routes: Routes = [
   { path: '', redirectTo: 'teacherinformation' , pathMatch: 'full'},
   { path: 'teacherinformation', component: TeacherinformationComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
