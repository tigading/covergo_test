import { Country } from '~/types/Country';
import { Package } from '~/types/Package';

export interface Insurance {
  name: string;
  age: number;
  country: Country;
  package: Package;
  hasData?: boolean;
}

export interface InsuranceState {
  insuranceSelected: Insurance;
}
