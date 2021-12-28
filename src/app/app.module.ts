import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterDonorComponent } from './register-donor/register-donor.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { RequestorComponent } from './requestor/requestor.component';
import { ResultsViewComponent } from './requestor/results-view/results-view.component';
import { DonorLoginComponent } from './donor-login/donor-login.component';
import { ViewDonorComponent } from './donor-login/view-donor/view-donor.component';
import { UpdateDonorComponent } from './donor-login/update-donor/update-donor.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterDonorComponent,
    DonorListComponent,
    RequestorComponent,
    ResultsViewComponent,
    DonorLoginComponent,
    ViewDonorComponent,
    UpdateDonorComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
