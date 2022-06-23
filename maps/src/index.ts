import { Company } from './Company';
import { CustomMap } from './CustoMap';
import { User } from './User';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);
