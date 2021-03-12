import { RentResponseModel } from './../models/rentResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  apiUrl = 'https://localhost:44397/api/rentals/getallrentaldetails';

  constructor(private httpClient: HttpClient) {}

  getRents(): Observable<RentResponseModel> {
    return this.httpClient.get<RentResponseModel>(this.apiUrl);
  }
}
