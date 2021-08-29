import { Roles } from './roles';

export interface User {
  uid: string;
  email: string;
  birthdate: string;
  firstName: string;
  lastName: string;
  role: Roles;
}
