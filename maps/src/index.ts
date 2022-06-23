import { Company } from './Company';
import { CustomMap } from './CustoMap';
import { User } from './User';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const customMap = new CustomMap('map');
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
