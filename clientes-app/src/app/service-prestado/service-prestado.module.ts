import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ServicePrestadoRoutingModule } from './service-prestado-routing.module';
import { ServicePrestadoFormComponent } from './service-prestado-form/service-prestado-form.component';
import { ServicePrestadoListComponent } from './service-prestado-list/service-prestado-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicePrestadoFormComponent,
    ServicePrestadoListComponent
  ],
  imports: [
    CommonModule,
    ServicePrestadoRoutingModule,
    FormsModule,
    RouterModule
  ], exports: [
    ServicePrestadoFormComponent,
    ServicePrestadoListComponent
  ]
})
export class ServicePrestadoModule { }
