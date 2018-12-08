import { IBranch } from 'app/shared/model//branch.model';

export interface ICustomer {
  id?: number;
  customerId?: number;
  customerName?: string;
  customerAddress?: string;
  customerEmail?: string;
  customerContact?: string;
  branchIds?: IBranch[];
}

export const defaultValue: Readonly<ICustomer> = {};
