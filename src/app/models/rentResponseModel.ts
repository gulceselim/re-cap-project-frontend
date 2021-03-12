import { ResponseModel } from './responseModel';
import { Rent } from './rent';

export interface RentResponseModel extends ResponseModel {
  data: Rent[];
}
