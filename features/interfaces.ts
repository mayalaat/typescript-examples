const fordFestiva = {
  name: 'Ford Festiva',
  year: 1994,
  broken: false,

  summary(): string {
    return `Name is: ${this.name}`;
  },
};

interface Vehicule {
  name: String;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldPrintVehicule = (vehicule: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicule.name}`);
  console.log(`Year: ${vehicule.year}`);
  console.log(`Broken?: ${vehicule.broken}`);
};
oldPrintVehicule(fordFestiva);

const printVehicule = (vehicule: Vehicule) => {
  console.log(`Name: ${vehicule.name}`);
  console.log(`Year: ${vehicule.year}`);
  console.log(`Broken?: ${vehicule.broken}`);
};
printVehicule(fordFestiva);
