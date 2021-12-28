import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-requestor',
  templateUrl: './requestor.component.html',
  styleUrls: ['./requestor.component.css']
})
export class RequestorComponent implements OnInit {
  requestorForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
      private service:DonorService,
      private router:Router
    ) { }

  ngOnInit(): void {
    this.requestorForm=this.formBuilder.group({
      name:[null,Validators.required],
      mobileNum:[null,Validators.required],
      bloodGroup:['default',Validators.required],
      state:['default',Validators.required],
      city:[null,Validators.required],
      pincode:[null,Validators.required],
    })
  }

  onSubmit(){
    console.log("in onsubmit")
    this.getRequiredDonors();
  }

  /*(){
    console.log("in getRequiredDonors")
   // this.pipelineForm.get('softwareName').value
    let bloodGroup =this.requestorForm.get('bloodGroup').value;
    let pincode=this.requestorForm.get('pincode').value;
    this.service.getReqiredDonors(bloodGroup,pincode).subscribe(data=>{
      console.log(data);
    }
    );
    console.log("no data");
    this.requestorForm.reset();
  }*/

  getRequiredDonors(){
    let bloodGroup =this.requestorForm.get('bloodGroup').value;
    let pincode=this.requestorForm.get('pincode').value;
    this.gotoViewRequiredDonor(bloodGroup,pincode)
  }

  gotoViewRequiredDonor(bloodGroup:string,pincode:number){
    this.router.navigate(['view-requiredDonors',bloodGroup,pincode]);
  }
}
