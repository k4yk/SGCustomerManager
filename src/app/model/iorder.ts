import * as moment from "moment";

export interface IOrder {
    customerId: number;
    orderNumber: number;
    value: string;
    quantity: number;
    orderedOn: moment.Moment;
}