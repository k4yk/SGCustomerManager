import * as moment from "moment";
import { Gender } from "./model/gender";
import { ICustomer } from "./model/icustomer";
import formatMoment from "./moment-helper";

export const Customers: ICustomer[] = [
    {
        id: 1,
        name: "Ted James",
        gender: Gender.male,
        originState: "Phoenix, Arizona",
        orders: [
            {
                orderNumber: 1234,
                item: "Apple",
                quantity: 3,
                orderedOn: formatMoment(moment().days(-5).hours(-3))
            },
            {
                orderNumber: 1235,
                item: "Banana",
                quantity: 10,
                orderedOn: formatMoment(moment().days(-5).hours(-2))
            },
            {
                orderNumber: 1236,
                item: "Orange",
                quantity: 12,
                orderedOn: formatMoment(moment().days(-5).hours(-1))
            },
            {
                orderNumber: 1237,
                item: "Pear",
                quantity: 15,
                orderedOn: formatMoment(moment().days(-5).minutes(-30))
            }
        ]
    },
    {
        id: 2,
        name: "Michelle Thompson",
        gender: Gender.female,
        originState: "Encinitas, California",
        orders: [
            {
                orderNumber: 4443,
                item: "Fender Stratocaster MN WH",
                quantity: 1,
                orderedOn: formatMoment(moment().days(-10).hours(-1))
            },
        ]
    },
    {
        id: 3,
        name: "Zed Bishop",
        gender: Gender.male,
        originState: "Seattle, Washington",
        orders: [
            {
                orderNumber: 5422,
                item: "Marshall JCM800 2203 100W",
                quantity: 1,
                orderedOn: formatMoment(moment().days(-22).hours(-1))
            },
            {
                orderNumber: 5423,
                item: "Marshall 1960A",
                quantity: 1,
                orderedOn: formatMoment(moment().days(-22).hours(-1))
            },
        ]
    },
    {
        id: 4,
        name: "Tina Adams",
        gender: Gender.female,
        originState: "Chandler, Arizona",
        orders: [
            {
                orderNumber: 3332,
                item: "Shure SM57",
                quantity: 1,
                orderedOn: formatMoment(moment().days(-15).hours(-2))
            },
            {
                orderNumber: 3333,
                item: "Shure Beta 58a",
                quantity: 1,
                orderedOn: formatMoment(moment().days(-13).hours(+1))
            },
        ]
    },
    {
        id: 5,
        name: "Igor Minar",
        gender: Gender.male,
        originState: "Dallas, Texas",
        orders: [
            {
                orderNumber: 7775,
                item: "BMW X5",
                quantity: 1,
                orderedOn: formatMoment(moment().days(-3).hours(-3))
            },
            {
                orderNumber: 7776,
                item: "Ferrari 812 Superfast",
                quantity: 1,
                orderedOn: formatMoment(moment().days(-3).hours(-3))
            },
        ]
    },
    {
        id: 6,
        name: "Brad Green",
        gender: Gender.male,
        originState: "Orlando, Florida",
        orders: [
            {
                orderNumber: 1111,
                item: "MSI GeForce RTX 3090 SUPRIM X",
                quantity: 1,
                orderedOn: formatMoment(moment().days(-10).hours(-8))
            },
        ]
    },
    {
        id: 7,
        name: "Misko Hevery",
        gender: Gender.male,
        originState: "Carey, North Carolina",
        orders: [
            {
                orderNumber: 7645,
                item: "T Black/Yellow M",
                quantity: 1,
                orderedOn: formatMoment(moment().days(-30).hours(-2))
            },
            {
                orderNumber: 7646,
                item: "T White/Red M",
                quantity: 1,
                orderedOn: formatMoment(moment().days(-30).hours(-1))
            },
        ]
    },
    {
        id: 8,
        name: "Heedy Wahlin",
        gender: Gender.female,
        originState: "Anaheim, California",
        orders: [
            {
                orderNumber: 8888,
                item: "D&G sunglasses pink",
                quantity: 1,
                orderedOn: formatMoment(moment().days(-1).hours(-1))
            },
        ]
    },
    {
        id: 9,
        name: "John Papa",
        gender: Gender.male,
        originState: "Orlando, Florida",
        orders: [
            {
                orderNumber: 9999,
                item: "JavaScript & JQuery book",
                quantity: 1,
                orderedOn: formatMoment(moment())
            },
        ]
    },
    {
        id: 10,
        name: "Tonya Smith",
        gender: Gender.female,
        originState: "Atlanta, Georgia",
        orders: []
    }
];