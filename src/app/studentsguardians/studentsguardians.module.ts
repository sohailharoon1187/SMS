import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsguardiansRoutingModule } from './studentsguardians-routing.module';
import { AdmissionComponent } from './admission/admission.component';
import { GuardiansaccessComponent } from './guardiansaccess/guardiansaccess.component';
import { RegistrationComponent } from './registration/registration.component';
import { MarkattendanceComponent } from './markattendance/markattendance.component';


@NgModule({
  declarations: [
    AdmissionComponent,
    GuardiansaccessComponent,
    RegistrationComponent,
    MarkattendanceComponent,
  ],

  imports: [
    CommonModule,
    StudentsguardiansRoutingModule
  ]
})
export class StudentsguardiansModule { }
