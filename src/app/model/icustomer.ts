import { Gender } from "./gender";
import { IOrder } from "./iorder";

export interface ICustomer {
    id: number;
    name: string;
    gender: Gender | undefined;
    originState: string;
    orders: IOrder[];
}