import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Donor } from './donor';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonorService {
  response:Observable<any>
  

  constructor(private httpClient:HttpClient) { }

  registerDonor(data:any): Observable<any>{
    console.log("inside register donor");
    console.log(data);
    this.response=this.httpClient.post('/api/register',data);
    //console.log(this.response);
    return this.response;
  }

  getDonorsList(): Observable<Donor[]>{
    return this.httpClient.get<Donor[]>('/api/getDonors');
    
  }

  getReqiredDonors(bloodGroup:string, pincode:number):Observable<Donor[]>{
    return this.httpClient.get<Donor[]>('/api/getRequiredDonors',{
      params:{
        "bloodGroup":bloodGroup,
        "pincode":pincode,
      },
    })
  }

  getReqiredDonorsByBloodGroup(bloodGroup:string):Observable<Donor[]>{
    return this.httpClient.get<Donor[]>('/api/getRequiredDonorsByBloodGroup',{
      params:{
        "bloodGroup":bloodGroup,
      },
    })
  }

  getDonor(mailId:string,password:string): Observable<Donor>{
    return this.httpClient.get<Donor>('/api/login',{
      params:{
        mailId:mailId,
        password:password,
      },
    })
  }

  getDonorByMailId(mailId:string):Observable<Donor>{
    return this.httpClient.get<Donor>('/api/getDonor',{
      params:{
        mailId:mailId,
      },
    })
  }
  deleteDonor(mailId:string):Observable<any>{
    return this.httpClient.delete<any>('/api/deleteDonor',{
      params:{
        mailId:mailId,
      },
    })
  }

  updateDonor(donor:Donor):Observable<Donor>{
    return this.httpClient.put<Donor>('/api/updateDonor',donor);
  }

  validateEmail(mailId:string):Observable<any>{
    return this.httpClient.get<any>('/api/validateEmail',{
      params:{
        mailId:mailId,
      },
    })
  }

 /*validateEmailExists(control:FormControl):Promise<any> | Observable<any>{
    const promise-new Promise<any>((resolve,reject)) =>{
      setTimeout(()=>{
          this.validateEmail(control.value)
      },1500)
    }
 }*/

 

}
