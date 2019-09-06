import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmissionComponent } from './admission/admission.component';
import { GuardiansaccessComponent } from './guardiansaccess/guardiansaccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { MarkattendanceComponent } from './markattendance/markattendance.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'admission' ,
    pathMatch: 'full'
   },
  {
    path: 'admission' ,
   component: AdmissionComponent
  },

  {
    path: 'guardiansaccess' ,
   component: GuardiansaccessComponent
  },
  {
    path: 'registration' ,
    component: RegistrationComponent
  },
  {
    path: 'markattendance' ,
     component: MarkattendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsguardiansRoutingModule { }
