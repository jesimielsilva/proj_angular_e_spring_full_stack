import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicePrestadoFormComponent } from './service-prestado-form/service-prestado-form.component';
import { ServicePrestadoListComponent } from './service-prestado-list/service-prestado-list.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {path: 'servicos-prestados', component: LayoutComponent, children: [
    
    {path: 'form', component: ServicePrestadoFormComponent},
    {path: 'lista', component: ServicePrestadoListComponent},
    {path:'', redirectTo: '/servicos-prestados/lista', pathMatch: 'full'}
  ]}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicePrestadoRoutingModule { }
