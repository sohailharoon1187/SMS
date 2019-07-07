import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { StatsComponent } from './stats/stats.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { AttendanceSummaryComponent } from './attendance-summary/attendance-summary.component';
import { ClassAttendanceComponent } from './class-attendance/class-attendance.component';
import { MessageBoxComponent } from './message-box/message-box.component';


@NgModule({
  declarations: [
    HomeComponent,
    ChartComponent,
    StatsComponent,
    EmployeeAttendanceComponent,
    NoticeBoardComponent,
    AttendanceSummaryComponent,
    ClassAttendanceComponent,
    MessageBoxComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [StatsComponent, EmployeeAttendanceComponent, NoticeBoardComponent, AttendanceSummaryComponent, ClassAttendanceComponent, MessageBoxComponent]
})
export class DashboardModule { }
