import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DonorService } from '../donor.service';
import { ValidationsService } from '../validations.service';

@Component({
  selector: 'app-register-donor',
  templateUrl: './register-donor.component.html',
  styleUrls: ['./register-donor.component.css']
})
export class RegisterDonorComponent implements OnInit {
  regForm:FormGroup;
  submitResponse$: Observable<any>;
  data:string=null
  constructor(
    private formBuilder:FormBuilder,
    private service:DonorService,
    private validationService:ValidationsService
    ) { }

  ngOnInit(): void {
    /*this.regForm.addControl('name',this.formBuilder.control(null,Validators.required));
    this.regForm.addControl('mailId',this.formBuilder.control(null,[Validators.required,Validators.email]));
    this.regForm.addControl('password',this.formBuilder.control(null,Validators.required));
    this.regForm.addControl('mobileNum',this.formBuilder.control(null,Validators.required));
    this.regForm.addControl('bloodGroup',this.formBuilder.control(null,Validators.required));
    this.regForm.addControl('state',this.formBuilder.control(null,Validators.required));
    this.regForm.addControl('city',this.formBuilder.control(null,Validators.required));
    this.regForm.addControl('pincode',this.formBuilder.control(null,Validators.required));*/
    this.data=null
    this.regForm=this.formBuilder.group({
      name:[null,Validators.required],
      mailId:[null,[Validators.required,Validators.email],this.validationService.validateEmailExists.bind(this)],
      password:[null,Validators.required],
      mobileNum:[null,Validators.required],
      bloodGroup:['default',Validators.required],
      state:['default',Validators.required],
      city:[null,Validators.required],
      pincode:[null,Validators.required],
    })
  }

  formSubmit(){
      console.log(this.regForm);
      let regUser = this.regForm.getRawValue();
      this.service.registerDonor(regUser).subscribe(
        data =>{
          this.data=data;
        }
      );
      this.regForm.reset();
      //document.write("submitted successfully");
  }

  

}

