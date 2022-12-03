export interface User {
  id?: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  emailVerified: boolean;
  isAdmin: boolean;
}
