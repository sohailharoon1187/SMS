import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AcademicRoutingModule } from './academic-routing.module';
import { AddClassComponent } from './add-class/add-class.component';
import { AddsectionComponent } from './addsection/addsection.component';
import { ClassinformationComponent } from './classinformation/classinformation.component';
import { ClasspromotionComponent } from './classpromotion/classpromotion.component';
import { AllsubjectsComponent } from './allsubjects/allsubjects.component';
import { AddoptionalsubjectComponent } from './addoptionalsubject/addoptionalsubject.component';
import { AddsubjectComponent } from './addsubject/addsubject.component';
import { ClasstimetableComponent } from './classtimetable/classtimetable.component';
import { AllexamroutineComponent } from './allexamroutine/allexamroutine.component';
import { AllnoticesComponent } from './allnotices/allnotices.component';
import { ApproveresultsheetComponent } from './approveresultsheet/approveresultsheet.component';
import { CreateexamComponent } from './createexam/createexam.component';
import { ExamattendanceComponent } from './examattendance/examattendance.component';
import { ExamresultComponent } from './examresult/examresult.component';
import { PublishnoticeComponent } from './publishnotice/publishnotice.component';
import { SetexamgradeComponent } from './setexamgrade/setexamgrade.component';
import { SetgradeinfoComponent } from './setgradeinfo/setgradeinfo.component';
import { SettimetableComponent } from './settimetable/settimetable.component';
import { StudentsmarksheetComponent } from './studentsmarksheet/studentsmarksheet.component';
import { SubmitresultsheetComponent } from './submitresultsheet/submitresultsheet.component';
import { TakeexamattendanceComponent } from './takeexamattendance/takeexamattendance.component';
import { TeachertimetableComponent } from './teachertimetable/teachertimetable.component';


const routes: Routes = [
  { path: '', redirectTo: 'addclass' , pathMatch: 'full'},
  { path: 'addclass', component: AddClassComponent },
  { path: 'addsection', component: AddsectionComponent },
  { path: 'classinformation', component: ClassinformationComponent },
  { path: 'classpromotion', component: ClasspromotionComponent },
  { path: 'allsubjects', component: AllsubjectsComponent },
  { path: 'addoptionalsubject', component: AddoptionalsubjectComponent },
  { path: 'teachertimetable', component: TeachertimetableComponent},
  { path: 'takeexamattendance', component: TakeexamattendanceComponent},
  { path: 'submitresultsheet', component: SubmitresultsheetComponent},
  { path: 'studentsmarksheet', component: StudentsmarksheetComponent},
  { path: 'settimetable', component: SettimetableComponent},
  { path: 'classtimetable', component: ClasstimetableComponent},
  { path: 'allexamroutine', component: AllexamroutineComponent},
  { path: 'allnotices', component: AllnoticesComponent},
  { path: 'approveresultsheet', component: ApproveresultsheetComponent},
  { path: 'createexam', component: CreateexamComponent},
  { path: 'examattendance', component: ExamattendanceComponent},
  { path: 'examresult', component: ExamresultComponent},
  { path: 'publishnotice', component: PublishnoticeComponent},
  { path: 'setexamgrade', component: SetexamgradeComponent},
  { path: 'setgradeinfo', component: SetgradeinfoComponent},
  { path: 'addsubject', component: AddsubjectComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicRoutingModule { }
