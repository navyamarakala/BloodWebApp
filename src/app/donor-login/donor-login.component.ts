import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-donor-login',
  templateUrl: './donor-login.component.html',
  styleUrls: ['./donor-login.component.css']
})
export class DonorLoginComponent implements OnInit {

  loginForm:FormGroup
  donor:Donor;

  constructor(private formBuilder:FormBuilder,
    private service:DonorService,
    private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      mailId:[null,[Validators.required,Validators.email]],
      password:[null,Validators.required],
    });
  }

  onSubmit(){
    this.getRequiredDonor();
  }

  getRequiredDonor(){
    let mailId =this.loginForm.get('mailId').value;
    let password=this.loginForm.get('password').value;
    this.gotoViewRequiredDonor(mailId,password);
  }
  gotoViewRequiredDonor(mailId:string,password:string){
    this.router.navigate(['view-donor',mailId,password]);
  }
}
