import * as moment from "moment";

export class Order {
    private customerId: number;
    private orderNumber: number;
    private value: string;
    private quantity: number;
    private orderedOn: moment.Moment;

    constructor(customerId: number, orderNumber: number, value: string, quantity: number, orderedOn: moment.Moment) {
        this.customerId = customerId;
        this.orderNumber = orderNumber;
        this.value = value;
        this.quantity = quantity;
        this.orderedOn = orderedOn;
    }
}