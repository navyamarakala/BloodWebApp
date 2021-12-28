import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {DonorListComponent } from './donor-list/donor-list.component'
import { RegisterDonorComponent } from './register-donor/register-donor.component';
import { RequestorComponent } from './requestor/requestor.component';
import { ResultsViewComponent } from './requestor/results-view/results-view.component';
import { DonorLoginComponent } from './donor-login/donor-login.component';
import { ViewDonorComponent } from './donor-login/view-donor/view-donor.component';
import { UpdateDonorComponent } from './donor-login/update-donor/update-donor.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register',component:RegisterDonorComponent},
  {path:'',component:HomeComponent},
  {path:'allDonors',component:DonorListComponent},
  {path:'requestor',component:RequestorComponent},
  {path:'view-requiredDonors/:bloodGroup/:pincode',component:ResultsViewComponent},
  {path:'donorLogin',component:DonorLoginComponent},
  {path:'view-donor/:mailId/:password',component:ViewDonorComponent},
  {path:'updateDonor/:mailId',component:UpdateDonorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
