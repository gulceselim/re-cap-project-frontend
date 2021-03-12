import { ResponseModel } from './responseModel';
import { User } from './user';

export interface UserResponseModel extends ResponseModel {
  data: User[];
}
