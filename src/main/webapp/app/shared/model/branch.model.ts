import { ICustomer } from 'app/shared/model//customer.model';

export interface IBranch {
  id?: number;
  branchId?: number;
  branchName?: string;
  customer?: ICustomer;
}

export const defaultValue: Readonly<IBranch> = {};
