const profile = {
  id: 1,
  city: 'Quito',
  age: 30,
  coords: {
    lat: 2,
    long: 3,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// ES2015
// const { age } = profile;
const { age }: { age: number } = profile;

const { city }: { city: string } = profile;

const { coords }: { coords: {} } = profile;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;

console.log(coords);
console.log(lat);
console.log(long);
