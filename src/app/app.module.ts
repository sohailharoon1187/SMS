import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TeachersModule } from './teachers/teachers.module';
import { HrmModule } from './hrm/hrm.module';
import { AccountModule } from './account/account.module';
import { LibraryModule } from './library/library.module';
import { TransportModule } from './transport/transport.module';
import { SystemMessageModule } from './system-message/system-message.module';
import { MobileMessageModule } from './mobile-message/mobile-message.module';
import { StoreManagementModule } from './store-management/store-management.module';
import { EventsModule } from './events/events.module';
import { ProfileComponent } from './profile/profile.component';
import { SettingsModule } from './settings/settings.module';
import { DashbordConfigurationComponent } from './dashbord-configuration/dashbord-configuration.component';
import { AcademicModule } from './academic/academic.module';
import { SearchModule } from './search/search.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileComponent,
    DashbordConfigurationComponent,

  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AcademicModule,
    SearchModule,
    DashboardModule,
    TeachersModule,
    HrmModule,
    AccountModule,
    LibraryModule,
    TransportModule,
    SystemMessageModule,
    MobileMessageModule,
    StoreManagementModule,
    EventsModule,
    SettingsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  //exports: [ProductListComponent]
})
export class AppModule { }
