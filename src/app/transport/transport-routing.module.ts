import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportFeeComponent } from './transport-fee/transport-fee.component';
import { VehiclesComponent } from './vehicles/vehicles.component';


const routes: Routes = [
  {path: '', redirectTo: 'transport-fee' , pathMatch: 'full'},
  {path: 'transport-fee' , component: TransportFeeComponent},
  {path: 'vehicles' , component: VehiclesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
