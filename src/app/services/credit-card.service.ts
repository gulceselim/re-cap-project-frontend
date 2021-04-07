import { ListResponseModel } from './../models/listResponseModel';
import { ResponseModel } from './../models/responseModel';
import { Observable } from 'rxjs';
import { CreditCard } from './../models/creditCard';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  apiUrl = 'https://localhost:44397/api/';

  constructor(private httpClient: HttpClient) {}

  add(creditCard: CreditCard): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'creditcards/add',
      creditCard
    );
  }

  getAllByUserId(userId: number): Observable<ListResponseModel<CreditCard>> {
    let newPath = this.apiUrl + 'creditcards/getallbyuserid?userId=' + userId;
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }
}
