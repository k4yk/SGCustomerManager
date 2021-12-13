import { Gender } from "./model/gender";
import { ICustomer } from "./model/icustomer";

export const Customers: ICustomer[] = [
    {
        id: 1,
        name: "Ted James",
        gender: Gender.male,
        originState: "Phoenix, Arizona",
        orders: []
    },
    {
        id: 2,
        name: "Michelle Thompson",
        gender: Gender.female,
        originState: "Encinitas, California",
        orders: []
    },
    {
        id: 3,
        name: "Zed Bishop",
        gender: Gender.male,
        originState: "Seattle, Washington",
        orders: []
    },
    {
        id: 4,
        name: "Tina Adams",
        gender: Gender.female,
        originState: "Chandler, Arizona",
        orders: []
    },
    {
        id: 5,
        name: "Igor Minar",
        gender: Gender.male,
        originState: "Dallas, Texas",
        orders: []
    },
    {
        id: 6,
        name: "Brad Green",
        gender: Gender.male,
        originState: "Orlando, Florida",
        orders: []
    },
    {
        id: 7,
        name: "Misko Hevery",
        gender: Gender.male,
        originState: "Carey, North Carolina",
        orders: []
    },
    {
        id: 8,
        name: "Heedy Wahlin",
        gender: Gender.female,
        originState: "Anaheim, California",
        orders: []
    },
    {
        id: 9,
        name: "John Papa",
        gender: Gender.male,
        originState: "Orlando, Florida",
        orders: []
    },
    {
        id: 10,
        name: "Tonya Smith",
        gender: Gender.female,
        originState: "Atlanta, Georgia",
        orders: []
    }
];