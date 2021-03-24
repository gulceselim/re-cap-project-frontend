import { ResponseModel } from './../models/responseModel';
import { Color } from './../models/color';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44397/api/';

  constructor(private httpClient: HttpClient) {}

  getColors(): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(
      this.apiUrl + 'colors/getall'
    );
  }

  add(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'colors/add',
      color
    );
  }

  update(color: Color): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'colors/update',
      color
    );
  }

  getColorById(colorId: number): Observable<ListResponseModel<Color>> {
    let newPath = this.apiUrl + 'colors/getbyid?id=' + colorId;
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
}
