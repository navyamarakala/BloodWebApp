import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donor } from 'src/app/donor';
import { DonorService } from 'src/app/donor.service';

@Component({
  selector: 'app-results-view',
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.css']
})
export class ResultsViewComponent implements OnInit {
  menuItems:any[];
  bloodGroup:string;
  pincode:number;
  donors:Donor[];
  constructor(private route: ActivatedRoute,
    private service:DonorService) { }

  ngOnInit(): void {
    this.getRequiredDonors()
  }

  getRequiredDonors(){
    this.bloodGroup=this.route.snapshot.params['bloodGroup'];
    this.pincode=this.route.snapshot.params['pincode'];
    console.log(this.bloodGroup);
    console.log(this.pincode);
    this.service.getReqiredDonors(this.bloodGroup,this.pincode).subscribe(data=>{
      this.donors=data;
     
  });
  }

  getAllRequiredDonors(){
    this.bloodGroup=this.route.snapshot.params['bloodGroup'];
    console.log(this.bloodGroup);
    console.log(this.pincode);
    this.service.getReqiredDonorsByBloodGroup(this.bloodGroup).subscribe(data=>{
      this.donors=data; 
  });
  }
}



