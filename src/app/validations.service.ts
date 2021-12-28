import { Injectable } from '@angular/core';
import { DonorService } from './donor.service';
import { AbstractControl, FormControl } from '@angular/forms';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor(private service:DonorService) { }

  validateEmailExists(control: AbstractControl): Promise<any> | Observable<any> {
    return timer(500).pipe(
      switchMap(() => {
        return this.service.validateEmail(control.value).pipe(
          map(res => (res ? { incorrect: true } : null))
        );
      })
    );
  }
}
