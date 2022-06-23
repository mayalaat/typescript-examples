/// <reference types="@types/google.maps" />

export interface Mappable {
  location: {
    lat: number;
    lon: number;
  };
  markerIcon: {
    icon: google.maps.SymbolPath;
    scale: number;
  };

  makerConten(): string;
}

export class CustomMap {
  googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lon,
      },
      icon: {
        path: mappable.markerIcon.icon,
        scale: mappable.markerIcon.scale,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.makerConten(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
