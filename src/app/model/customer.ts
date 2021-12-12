import { Gender } from "./gender";
import { Order } from "./order";

export class Customer {
    private id: number;
    private name: string;
    private gender: Gender | undefined;
    private originState: string;
    private orders: Order[];

    constructor(id: number, name: string, gender: Gender, originState: string, orders: Order[]) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.originState = originState;
        this.orders = orders;
    }
}