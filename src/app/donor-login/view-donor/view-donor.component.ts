import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Donor } from 'src/app/donor';
import { DonorService } from 'src/app/donor.service';

@Component({
  selector: 'app-view-donor',
  templateUrl: './view-donor.component.html',
  styleUrls: ['./view-donor.component.css']
})
export class ViewDonorComponent implements OnInit {

  dataMessage=""
  mailId:string;
  password:string;
  donor:Donor;

  constructor( private route: ActivatedRoute,
    private service:DonorService,
    private router:Router) { }

  ngOnInit(): void {
    this.dataMessage=null
    this.getDonor();
  
  }

  getDonor(){
    this.mailId=this.route.snapshot.params['mailId'];
    this.password=this.route.snapshot.params['password'];
    this.service.getDonor(this.mailId,this.password).subscribe(data=>{
      this.donor=data;
      console.log(data);
    })  
  }

  updateDonor(mailId:string){
    this.router.navigate(['updateDonor',mailId])
  }

  deleteDonor(mailId:string){
    this.service.deleteDonor(mailId).subscribe(data=>
      {
          this.dataMessage=data
      })
  }
}
  

