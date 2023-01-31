import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicePrestadoFormComponent } from './service-prestado-form/service-prestado-form.component';
import { ServicePrestadoListComponent } from './service-prestado-list/service-prestado-list.component';

const routes: Routes = [
  {path: 'service-prestado-form', component: ServicePrestadoFormComponent},
  {path: 'service-prestado-lista', component: ServicePrestadoListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicePrestadoRoutingModule { }
