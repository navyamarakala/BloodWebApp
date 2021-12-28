import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Donor } from 'src/app/donor';
import { DonorService } from 'src/app/donor.service';

@Component({
  selector: 'app-update-donor',
  templateUrl: './update-donor.component.html',
  styleUrls: ['./update-donor.component.css']
})
export class UpdateDonorComponent implements OnInit {
  mailId:string
  donor:Donor=new Donor();
  regForm:FormGroup
  updateMessage=null

  constructor(private route:ActivatedRoute,
    private service:DonorService,
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.updateMessage=null
    this.getDonorData();
    console.log(this.donor.name)
    /*this.regForm=this.formBuilder.group({
      name:[this.donor.name,Validators.required],
      mailId:[this.donor.mailId,[Validators.required,Validators.email]],
      password:[this.donor.password,Validators.required],
      mobileNum:[this.donor.mobileNum,Validators.required],
      bloodGroup:[this.donor.bloodGroup,Validators.required],
      state:[this.donor.state,Validators.required],
      city:[this.donor.state,Validators.required],
      pincode:[this.donor.pincode,Validators.required],
    })*/
  }

  getDonorData(){
    this.mailId=this.route.snapshot.params['mailId'];
    this.service.getDonorByMailId(this.mailId).subscribe(data=>
      {
          console.log(data);
          this.donor=data;
      });
  }

formSubmit(){
  this.service.updateDonor(this.donor).subscribe(data=>{
    this.donor=data
    this.updateMessage="Updated Successfully"
  })
}
}
