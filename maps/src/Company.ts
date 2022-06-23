import { faker } from '@faker-js/faker';
import { Mappable } from './CustoMap';

export class Company implements Mappable {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lon: number;
  };

  markerIcon: {
    icon: google.maps.SymbolPath;
    scale: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude()),
    };
    this.markerIcon = {
      icon: google.maps.SymbolPath.BACKWARD_OPEN_ARROW,
      scale: 10,
    };
  }

  makerConten(): string {
    return `
    <h1>Company name: ${this.name}</h1>
    <h3>${this.catchPhrase}</h3>
    `;
  }
}
