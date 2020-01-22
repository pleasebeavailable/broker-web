import {Role} from './Role';

export class User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  rroles: Role;
  token?: string;
}
