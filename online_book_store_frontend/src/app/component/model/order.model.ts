import { Item } from "./item.model";

export interface Order{
    mrpPrice : number;
    orderId : number;
    orderStatus:string;
    orderedDate:string;
    paymentStatus:string;
    quantity : number;
    totalPrice: number;	
    itemname: string;
    image: string;
    item:Array<Item>;
}