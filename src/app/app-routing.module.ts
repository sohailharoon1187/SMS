import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)
  },
  {
    path: 'academic',
    loadChildren: () => import('./academic/academic.module').then(mod => mod.AcademicModule)
  },
  {
    path: 'studentsguardians',
    loadChildren: () => import('./studentsguardians/studentsguardians.module').then(mod => mod.StudentsguardiansModule)
  },
  {
    path: 'transport' ,
    loadChildren: () => import('./transport/transport.module').then(mod => mod.TransportModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
