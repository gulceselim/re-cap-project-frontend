import { Rent } from './../models/rent';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  apiUrl = 'https://localhost:44397/api/rentals/getallrentaldetails';

  constructor(private httpClient: HttpClient) {}

  getRents(): Observable<ListResponseModel<Rent>> {
    return this.httpClient.get<ListResponseModel<Rent>>(this.apiUrl);
  }
}
