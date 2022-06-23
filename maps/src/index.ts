import { Company } from './Company';
import { CustomMap } from './CustoMap';
import { User } from './User';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const customMap = new CustomMap('map');

// Typescript automatically inspecting what type it's
// checking to see if user satisfies the 'Mappable' interface.
customMap.addMarker(user);
// Typescript hasn't issue with us whatsoever passing a user/company
// into addMaker method
customMap.addMarker(company);
