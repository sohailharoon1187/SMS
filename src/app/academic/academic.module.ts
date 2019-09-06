import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicRoutingModule } from './academic-routing.module';
import { AddClassComponent } from './add-class/add-class.component';
import { AddsectionComponent } from './addsection/addsection.component';
import { ClassinformationComponent } from './classinformation/classinformation.component';
import { ClasspromotionComponent } from './classpromotion/classpromotion.component';
import { AllsubjectsComponent } from './allsubjects/allsubjects.component';
import { AddoptionalsubjectComponent } from './addoptionalsubject/addoptionalsubject.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';
import { SettimetableComponent } from './settimetable/settimetable.component';
import { SetgradeinfoComponent } from './setgradeinfo/setgradeinfo.component';
import { ClasstimetableComponent } from './classtimetable/classtimetable.component';
import { TeachertimetableComponent } from './teachertimetable/teachertimetable.component';
import { SetexamgradeComponent } from './setexamgrade/setexamgrade.component';
import { CreateexamComponent } from './createexam/createexam.component';
import { AllexamroutineComponent } from './allexamroutine/allexamroutine.component';
import { TakeexamattendanceComponent } from './takeexamattendance/takeexamattendance.component';
import { ExamattendanceComponent } from './examattendance/examattendance.component';
import { SubmitresultsheetComponent } from './submitresultsheet/submitresultsheet.component';
import { ApproveresultsheetComponent } from './approveresultsheet/approveresultsheet.component';
import { ExamresultComponent } from './examresult/examresult.component';
import { StudentsmarksheetComponent } from './studentsmarksheet/studentsmarksheet.component';
import { PublishnoticeComponent } from './publishnotice/publishnotice.component';
import { AllnoticesComponent } from './allnotices/allnotices.component';


@NgModule({
  declarations: [AddClassComponent, AddsectionComponent, ClassinformationComponent, ClasspromotionComponent, AllsubjectsComponent, AddoptionalsubjectComponent, AddsubjectComponent, SettimetableComponent, SetgradeinfoComponent, ClasstimetableComponent, TeachertimetableComponent, SetexamgradeComponent, CreateexamComponent, AllexamroutineComponent, TakeexamattendanceComponent, ExamattendanceComponent, SubmitresultsheetComponent, ApproveresultsheetComponent, ExamresultComponent, StudentsmarksheetComponent, PublishnoticeComponent, AllnoticesComponent],
  imports: [
    CommonModule,
    AcademicRoutingModule
  ]
})
export class AcademicModule { }
