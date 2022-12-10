import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { countries } from './data/Countries';

@Injectable({providedIn: 'root'})
export class LocationService {

  constructor() {
  }

  getGovernorates(countryName: string) {
    const cities = countries.find(c => c.name === countryName).cities;
    return [...new Set(cities.map(item => item.governorate).sort(this.compareFuncSort))];
  }

  getMunicipalities(countryName: string, governorate: string) {
    const cities = countries.find(c => c.name === countryName).cities;
    return [...new Set(cities.filter(c => c.governorate === governorate).map(item => item.municipality).sort(this.compareFuncSort))];
  }

  compareFuncSort(n1,n2): number {
    if (n1 > n2) {
        return 1;
    }

    if (n1 < n2) {
        return -1;
    }

    return 0;
  };
}
