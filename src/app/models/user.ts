import { Byte } from '@angular/compiler/src/util';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: Byte[];
  passwordSalt: Byte[];
  status: boolean;
}
