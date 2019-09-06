import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportRoutingModule } from './transport-routing.module';
import { TransportFeeComponent } from './transport-fee/transport-fee.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { RouteComponent } from './route/route.component';


@NgModule({
  declarations: [TransportFeeComponent, VehiclesComponent, RouteComponent],
  imports: [
    CommonModule,
    TransportRoutingModule
  ]
})
export class TransportModule { }
