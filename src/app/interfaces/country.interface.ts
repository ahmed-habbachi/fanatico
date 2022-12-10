export interface Country {
  name: string;
  cities: City[];
}

export interface City {
  governorate: string;
  code: number;
  municipality: string;
}
