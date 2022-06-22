class Vehicule {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class MyCar extends Vehicule {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vromm');
  }
}

const vehicule = new Vehicule('orange');
console.log(vehicule.color);

const myCar = new MyCar(4, '');
console.log(myCar.wheels);

/***************** Class with setters and getters *********************/
class Person {
  constructor(private _name: string, private _age: number) {}

  public get age(): number {
    return this._age;
  }
  public set age(value: number) {
    this._age = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
}
const person = new Person('Alex', 38);
console.log(person.name);
console.log(person.age);
