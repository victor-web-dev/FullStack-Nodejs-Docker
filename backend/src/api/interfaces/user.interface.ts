export interface IUser {
  id?: number;
  email?: string;
  password?: string;
  admin?: boolean;
}

export interface IAddress {
  postalCode: string;
  street: string;
  streetNumber: number;
  observation: string;
  city: string;
}

export interface IUserInformation {
  name: string;
  birth: Date;
  gender: string;
  phone: string;
}

export interface IUserFullData extends IUser {
  address: IAddress;
  userInfo: IUserInformation;
}
