import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
  donors: Donor[];
  constructor(private service:DonorService) { }

  ngOnInit(): void {
    this.getDonors();
  }

  getDonors(){
    this.service.getDonorsList().subscribe(data =>{
      console.log(data);
      this.donors=data;
    });
  }

}
