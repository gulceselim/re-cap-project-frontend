import { ResponseModel } from './../models/responseModel';
import { Rent } from './../models/rent';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RentService {
  apiUrl = 'https://localhost:44397/api/';

  constructor(private httpClient: HttpClient) {}

  getRents(): Observable<ListResponseModel<Rent>> {
    return this.httpClient.get<ListResponseModel<Rent>>(
      this.apiUrl + 'rentals/getallrentaldetails'
    );
  }

  addRent(rent: Rent): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'rentals/add',
      rent
    );
  }
}
