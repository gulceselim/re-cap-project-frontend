import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { Observable } from 'rxjs';
import { CarImage } from './../models/carImage';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl = 'https://localhost:44397/api/';

  constructor(private httpClient: HttpClient) {}

  getCarImageByCarId(carId: number): Observable<SingleResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carImages/getbycar?id=' + carId;
    return this.httpClient.get<SingleResponseModel<CarImage>>(newPath);
  }

  getCarImages(): Observable<ListResponseModel<CarImage>> {
    return this.httpClient.get<ListResponseModel<CarImage>>(
      this.apiUrl + 'carImages/getall'
    );
  }

  add(carId: number, file: File): Observable<ResponseModel> {
    const formData: FormData = new FormData();
    formData.append('CarId', carId.toString());
    formData.append('Image', file);

    return this.httpClient.post<ResponseModel>(this.apiUrl + '/add', formData, {
      reportProgress: true,
      responseType: 'json',
    });
  }
}
