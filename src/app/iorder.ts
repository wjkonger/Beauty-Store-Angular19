import { IAddress } from "./iaddress";

export interface IOrder {
    firstName?: string;
    lastName?: string;
    email?: string;
    
    shippingAddress?: IAddress;
}
