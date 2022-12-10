import { SportFieldType } from './sport-field-type.interface';
import { User } from './user.interface';

export interface SportField {
  id?: string;
  name: string;
  description: string;
  country: string;
  city: string;
  region: string;
  phone: string;
  phone2: string;
  email: string;
  picture: string;
  sportType: string;
  facebook?: string;
  instagram?: string;
  latitude: number;
  longitude: number;
  owner: string;
}
