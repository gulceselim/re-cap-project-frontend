import { ResponseModel } from './../models/responseModel';
import { RegisterModel } from './../models/registerModul';
import { SingleResponseModel } from './../models/singleResponseModel';
import { Observable } from 'rxjs';
import { TokenModel } from './../models/tokenModel';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './../models/loginModul';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44397/api/';

  constructor(private httpClient: HttpClient) {}

  login(user: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    this.setUserName(user.email);
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'auth/login',
      user
    );
  }

  register(user: RegisterModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'auth/register',
      user
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('fullName');
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  setUserName(fullName: string) {
    localStorage.setItem('fullName', fullName);
  }

  getEmail(): string {
    return localStorage.getItem('fullName');
  }
}
