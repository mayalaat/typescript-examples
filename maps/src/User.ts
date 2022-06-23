import { faker } from '@faker-js/faker';
import { Mappable } from './CustoMap';

export class User implements Mappable {
  name: string;

  location: {
    lat: number;
    lon: number;
  };

  markerIcon: {
    icon: google.maps.SymbolPath;
    scale: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude()),
    };
    this.markerIcon = {
      icon: google.maps.SymbolPath.CIRCLE,
      scale: 10,
    };
  }

  makerConten(): string {
    return `
    <h1>User name: ${this.name}</h1>
    `;
  }
}
